import { Redis } from '@upstash/redis'
import { randomUUID } from 'crypto'

const kv = Redis.fromEnv()

/* ── Types ─────────────────────────────────────────── */

export type CandidatureStatus = 'pending' | 'approved' | 'rejected'

export interface Candidature {
  id:            string
  createdAt:     string
  status:        CandidatureStatus
  statusNote?:   string
  statusAt?:     string
  // Accounts
  discordName:   string
  steamId:       string
  steamName:     string
  cfxreUsername: string
  cfxreId?:      string   // numeric fivem: identifier
  // Character
  prenom:        string
  nom:           string
  age:           string
  ville:         string
  metier:        string
  histoire:      string
  experience:    string
  motivation:    string
}

export interface WhitelistEntry {
  cfxreId:       string
  cfxreUsername: string
  discordName:   string
  approvedAt:    string
  approvedBy?:   string
}

export interface Article {
  id:        string
  createdAt: string
  updatedAt: string
  title:     string
  date:      string      // display date (lore)
  category:  string
  excerpt:   string
  content:   string
  author:    string
  featured:  boolean
}

/* ── Candidatures ───────────────────────────────────── */

const CAND_LIST = 'candidatures:list'
const candKey   = (id: string) => `candidature:${id}`

export async function createCandidature(data: Omit<Candidature, 'id' | 'createdAt' | 'status'>): Promise<Candidature> {
  const candidature: Candidature = {
    id:        randomUUID(),
    createdAt: new Date().toISOString(),
    status:    'pending',
    ...data,
  }
  await kv.set(candKey(candidature.id), candidature)
  await kv.lpush(CAND_LIST, candidature.id)
  return candidature
}

export async function getCandidature(id: string): Promise<Candidature | null> {
  return kv.get<Candidature>(candKey(id))
}

export async function listCandidatures(status?: CandidatureStatus): Promise<Candidature[]> {
  const ids = await kv.lrange<string>(CAND_LIST, 0, -1)
  if (!ids.length) return []
  const all = await Promise.all(ids.map(id => kv.get<Candidature>(candKey(id))))
  const valid = all.filter((c): c is Candidature => c !== null)
  return status ? valid.filter(c => c.status === status) : valid
}

export async function updateCandidatureStatus(
  id: string,
  status: CandidatureStatus,
  note?: string,
): Promise<Candidature | null> {
  const c = await getCandidature(id)
  if (!c) return null
  const updated: Candidature = { ...c, status, statusNote: note, statusAt: new Date().toISOString() }
  await kv.set(candKey(id), updated)
  return updated
}

/* ── Articles ───────────────────────────────────────── */

const ART_LIST = 'articles:list'
const artKey   = (id: string) => `article:${id}`

export async function createArticle(data: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>): Promise<Article> {
  const article: Article = {
    id:        randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...data,
  }
  await kv.set(artKey(article.id), article)
  await kv.lpush(ART_LIST, article.id)
  return article
}

export async function getArticle(id: string): Promise<Article | null> {
  return kv.get<Article>(artKey(id))
}

export async function listArticles(): Promise<Article[]> {
  const ids = await kv.lrange<string>(ART_LIST, 0, -1)
  if (!ids.length) return []
  const all = await Promise.all(ids.map(id => kv.get<Article>(artKey(id))))
  return all.filter((a): a is Article => a !== null)
}

export async function updateArticle(id: string, data: Partial<Omit<Article, 'id' | 'createdAt'>>): Promise<Article | null> {
  const a = await getArticle(id)
  if (!a) return null
  const updated: Article = { ...a, ...data, updatedAt: new Date().toISOString() }
  await kv.set(artKey(id), updated)
  return updated
}

export async function deleteArticle(id: string): Promise<void> {
  await kv.del(artKey(id))
  const ids = await kv.lrange<string>(ART_LIST, 0, -1)
  const filtered = ids.filter(i => i !== id)
  await kv.del(ART_LIST)
  if (filtered.length) await kv.rpush(ART_LIST, ...filtered)
}

/* ── Whitelist ──────────────────────────────────────── */

const WL_LIST = 'whitelist:list'
const wlKey   = (id: string) => `whitelist:${id}`

export async function addToWhitelist(entry: WhitelistEntry): Promise<void> {
  const existing = await kv.get(wlKey(entry.cfxreId))
  await kv.set(wlKey(entry.cfxreId), entry)
  if (!existing) await kv.lpush(WL_LIST, entry.cfxreId)
}

export async function removeFromWhitelist(cfxreId: string): Promise<void> {
  await kv.del(wlKey(cfxreId))
  const ids      = await kv.lrange<string>(WL_LIST, 0, -1)
  const filtered = ids.filter(i => i !== cfxreId)
  await kv.del(WL_LIST)
  if (filtered.length) await kv.rpush(WL_LIST, ...filtered)
}

export async function isWhitelisted(cfxreId: string): Promise<boolean> {
  return (await kv.get(wlKey(cfxreId))) !== null
}

export async function listWhitelist(): Promise<WhitelistEntry[]> {
  const ids = await kv.lrange<string>(WL_LIST, 0, -1)
  if (!ids.length) return []
  const all = await Promise.all(ids.map(id => kv.get<WhitelistEntry>(wlKey(id))))
  return all.filter((e): e is WhitelistEntry => e !== null)
}
