import { supabase } from "$lib/supabaseClient";


export async function load() {
    const { data } = await supabase
    .from("player_tries")
    .select();
  return {
     player_tries: data ?? [],
  };
}