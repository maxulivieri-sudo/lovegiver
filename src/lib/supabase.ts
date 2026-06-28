import { createBrowserClient } from '@supabase/ssr';

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export type Profile = {
  id: string;
  full_name: string | null;
  profession: string | null;
  created_at: string;
};

export type Attempt = {
  id: string;
  user_id: string;
  scenario_id: string;
  scenario_title: string;
  score: number;
  max_score: number;
  results: unknown[];
  completed_at: string;
};
