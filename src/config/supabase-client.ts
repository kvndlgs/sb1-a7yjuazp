import { createClient } from '@supabase/supabase-js';

const supabaseUrl: string = process.env.VITE_SUPABASE_URL!;
const supabaseAnonKey: string = process.env.VITE_SUPABASE_KEY!;

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);