import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@types/supabase'

let supabase: ReturnType<typeof createBrowserSupabaseClient> | null = null

export function getBrowserSupabase() {
  if (!supabase) supabase = createBrowserSupabaseClient<Database>()
  return supabase
}
