CREATE TABLE public.contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL CHECK (char_length(first_name) BETWEEN 1 AND 100),
  last_name text NOT NULL CHECK (char_length(last_name) BETWEEN 1 AND 100),
  company text CHECK (char_length(company) <= 150),
  job_title text CHECK (char_length(job_title) <= 150),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  phone text CHECK (char_length(phone) <= 40),
  country text CHECK (char_length(country) <= 100),
  sector text CHECK (char_length(sector) <= 150),
  team_size text CHECK (char_length(team_size) <= 50),
  need text NOT NULL CHECK (char_length(need) <= 100),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 3000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_requests TO anon, authenticated;
GRANT ALL ON public.contact_requests TO service_role;
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a contact request" ON public.contact_requests FOR INSERT TO anon, authenticated WITH CHECK (true);