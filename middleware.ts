import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  // Stub: refresh de sessão Supabase será tratado aqui futuramente.
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
