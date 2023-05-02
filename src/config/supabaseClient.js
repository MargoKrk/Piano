import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_ANON_KEY


// export const supabaseUrl = "https://ekjflallxybejyuywigk.supabase.co"
// export const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVramZsYWxseHliZWp5dXl3aWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI4MDY4MjgsImV4cCI6MTk5ODM4MjgyOH0.HG3eUDigtVxH0-bCkumLRCA9OdhwKSn6ZtRxltceYK4"
//
// export const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVramZsYWxseHliZWp5dXl3aWdrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjgwNjgyOCwiZXhwIjoxOTk4MzgyODI4fQ.2PYeB2e1vieFZMc2Ww0eyNnZkPDmOwyvdW4W8gYUjcs"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
