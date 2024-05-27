

import { json } from '@sveltejs/kit';

export async function load ({ fetch,params }) {
    await new Promise(resolve => setTimeout(resolve,1000))
    const id = params.id
    const res = await fetch(`/api/player_tries/${id}`)
    const { data }  =  await res.json()
    if (res.ok) {
        return {
            player_tries: data
        }
    }

    return {
        status: 301
    }
    
}