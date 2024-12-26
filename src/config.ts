import { env } from 'process';

if (!env.NEXT_SUPABASE_ANON_KEY) {
  alert("NEXT_SUPABASE_ANON_KEY is required");
  throw new Error("NEXT_SUPABASE_ANON_KEY is required");
}
if (!env.NEXT_SUPABASE_URL) {
  alert("NEXT_SUPABASE_URL is required");
  throw new Error("NEXT_SUPABASE_URL is required");
}

console.log(env.NEXT_SUPABASE_ANON_KEY);
console.log(env.NEXT_SUPABASE_URL);
export const SUPABASE_ANON_KEY = env.NEXT_SUPABASE_ANON_KEY;
export const SUPABASE_URL = env.NEXT_SUPABASE_URL;