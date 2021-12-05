import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error('Please define the NEXT_PUBLIC_SUPABASE_URL environment variable inside .env.local');
}

if (!supabaseAnonKey) {
  throw new Error('Please define the NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable inside .env.local');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {});