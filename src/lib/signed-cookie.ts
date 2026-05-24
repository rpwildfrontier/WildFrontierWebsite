import crypto from 'crypto'

function secret(): string {
  return process.env.NEXTAUTH_SECRET ?? 'dev-secret'
}

export function signCookie(data: object): string {
  const b64  = Buffer.from(JSON.stringify(data)).toString('base64url')
  const sig  = crypto.createHmac('sha256', secret()).update(b64).digest('base64url')
  return `${b64}.${sig}`
}

export function readSignedCookie<T>(value: string): T | null {
  try {
    const dot = value.lastIndexOf('.')
    if (dot < 0) return null
    const b64 = value.slice(0, dot)
    const sig  = value.slice(dot + 1)
    const expected = crypto.createHmac('sha256', secret()).update(b64).digest('base64url')
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null
    return JSON.parse(Buffer.from(b64, 'base64url').toString()) as T
  } catch {
    return null
  }
}

export function generateCfxCode(discordId: string): string {
  return crypto
    .createHmac('sha256', secret())
    .update(`wf-cfxre:${discordId}`)
    .digest('hex')
    .slice(0, 8)
    .toUpperCase()
}
