import { supabase } from "$lib/supabaseClient";
import { json } from '@sveltejs/kit';
export const GET = async () => {
    const res = await supabase
        .from("fixtures")
        .select()
    return json(res);
}

