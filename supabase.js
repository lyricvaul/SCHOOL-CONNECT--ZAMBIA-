// SchoolConnect Zambia - Supabase connection

const SUPABASE_URL = "https://lievtubbwtrcvsvnwwep.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_uIADMwZxePQGHUgDmrK_Xg_ASPOSkJ1";

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
