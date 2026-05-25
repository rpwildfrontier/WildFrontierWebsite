import { NextRequest, NextResponse } from 'next/server'
import { listWhitelist } from '@/lib/kv'

export async function GET(req: NextRequest) {
  const secret = process.env.WHITELIST_API_SECRET
  if (secret) {
    const provided = req.headers.get('x-whitelist-secret') ?? req.nextUrl.searchParams.get('secret')
    if (provided !== secret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  const entries     = await listWhitelist()
  const identifiers = entries.map(e => `fivem:${e.cfxreId}`)
  return NextResponse.json({ identifiers, count: identifiers.length })
}
