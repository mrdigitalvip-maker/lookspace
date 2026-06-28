export type Json = null | boolean | number | string | Json[] | { [key: string]: Json }

export type Database = {
  // gerar tipos: npx supabase gen types typescript --file src/types/supabase.d.ts
}
