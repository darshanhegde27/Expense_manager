import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = 'https://pwbbaltoqpoihmqzkywp.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3YmJhbHRvcXBvaWhtcXpreXdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTAyOTIwNzQsImV4cCI6MTk2NTg2ODA3NH0.sLWBC-kG2lo218TjS7AaC2XqLAhS_8eDD73_Xjw_Ru4';
export default createClient(SUPABASE_URL, SUPABASE_KEY);
