import { createClient } from '@supabase/supabase-js';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Please define the NEXT_PUBLIC_SUPABASE_URL environment variable inside .env.local');
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Please define the NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable inside .env.local');
}

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);