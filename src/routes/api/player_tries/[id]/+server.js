import { supabase } from "$lib/supabaseClient";
import { json } from '@sveltejs/kit';

export async function GET ({params}) {

    const res = await supabase
        .from("player_tries")
        .select()
        .eq('game_id',params.id)
    return json(res);
}

// export const POST = async ({ request }) => { 
//     const req = await supabase
//     .from('player_tries')
//     .upsert(request.data.json())
//     .select()
//     return new Response(JSON.stringify(req))

// }