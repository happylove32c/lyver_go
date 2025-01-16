
// import dotenv from 'dotenv';
// const dotenv = require('dotenv');
import { createClient } from '@supabase/supabase-js'

// dotenv.config()

const supabase = createClient(
    "https://eghzfwsgdvzcesihbydf.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnaHpmd3NnZHZ6Y2VzaWhieWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwMzM3OTYsImV4cCI6MjA1MjYwOTc5Nn0.DGKfGshJ2w0l3qTypnPZpaN2un3vhjexfsSS21lThu4"
);

export default supabase;