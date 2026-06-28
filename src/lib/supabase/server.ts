import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import type { Database } from '@types/supabase'

export async function getServerSupabase() {
  return createServerSupabaseClient<Database>({ cookies })
}
