import { json } from '@sveltejs/kit';

export async function load ({ fetch }) {
    await new Promise(resolve => setTimeout(resolve,1000))

    const res = await fetch('/api/fixtures')
    const { data }  =  await res.json()
    if (res.ok) {
        return {
            fixtures: data
        }
    }

    return {
        status: 301
    }
    
}