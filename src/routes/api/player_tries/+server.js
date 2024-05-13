import { supabase } from "$lib/supabaseClient";


export const GET = async () => {
    const res = await supabase
        .from("player_tries")
        .select()
    return new Response(JSON.stringify(res),{status:200});
}


export const POST = async ({ request }) => {
    
    
    const req = await supabase
    .from('player_tries')
    .upsert(request.data.json())
    .select()
    return new Response(JSON.stringify(req))

}