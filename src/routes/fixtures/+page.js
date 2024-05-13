import { json } from '@sveltejs/kit';

export const load = ({ fetch }) => {

    const fetchFixtures = async () => {
        const res = await fetch('/api/fixtures')
        const data =  await res.json()
        return data
    }
    return {
        fixtures: fetchFixtures().then((data)=> data.data)
    }
}