
// import dotenv from 'dotenv';
// const dotenv = require('dotenv');
import { createClient } from '@supabase/supabase-js'

// dotenv.config()

const supabase = createClient(
    "https://llaqbfjfllqnjqhafnxj.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsYXFiZmpmbGxxbmpxaGFmbnhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3MjQ1OTIsImV4cCI6MjA1MjMwMDU5Mn0.OMUDi8r785oqVATHgfmAt1vQZk8JSh3q0d7lLU_fpXo"
);

export default supabase;