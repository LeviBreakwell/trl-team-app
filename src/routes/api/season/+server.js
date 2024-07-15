import { supabase } from "../../../lib/server/supabaseClient";
import { json } from '@sveltejs/kit';
export const GET = async () => {
    const res = await supabase
        .from("games")
        .select(`*,
            player_tries(
                players(
                    name
                ),
                tries,
                appearance
            )
        `)
        // .eq()
    return json(res);
}

// export const POST = async ({ request }) => { 
//     const req = await supabase
//     .from('player_tries')
//     .upsert(request.data.json())
//     .select()
//     return new Response(JSON.stringify(req))

// }