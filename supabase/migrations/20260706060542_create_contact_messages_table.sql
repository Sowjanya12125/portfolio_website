/*
# Create contact_messages table

1. New Tables
- `contact_messages`
- `id` (uuid, primary key)
- `name` (text, not null)
- `email` (text, not null)
- `subject` (text, not null)
- `message` (text, not null)
- `is_read` (boolean, default false)
- `created_at` (timestamp)

2. Security
- Enable RLS on `contact_messages`.
- Allow anon + authenticated to insert (contact form submissions).
- Only allow read access to authenticated users (admin access).
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_read_contact_messages" ON contact_messages;
CREATE POLICY "authenticated_read_contact_messages" ON contact_messages FOR SELECT
TO authenticated USING (true);

CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx ON contact_messages(created_at DESC);
