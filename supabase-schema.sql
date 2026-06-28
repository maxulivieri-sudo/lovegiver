-- Profili utente (estende auth.users)
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  full_name text,
  profession text,
  created_at timestamptz default now()
);

-- Tentativi completati
create table if not exists public.attempts (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  scenario_id text not null,
  scenario_title text not null,
  score integer not null,
  max_score integer not null,
  results jsonb not null default '[]',
  completed_at timestamptz default now()
);

-- Row Level Security
alter table public.profiles enable row level security;
alter table public.attempts enable row level security;

create policy "Utenti vedono solo il proprio profilo"
  on public.profiles for all
  using (auth.uid() = id);

create policy "Utenti vedono solo i propri tentativi"
  on public.attempts for all
  using (auth.uid() = user_id);

-- Crea profilo automaticamente al signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
