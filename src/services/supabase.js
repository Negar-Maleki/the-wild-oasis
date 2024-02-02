import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qpnjabrajjlfhjoqysys.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwbmphYnJhampsZmhqb3F5c3lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwOTIwMjYsImV4cCI6MjAyMTY2ODAyNn0.boBBTEfuBlpojgOy5avD7yKE-wt4BZZ9n-T53k0J93A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
