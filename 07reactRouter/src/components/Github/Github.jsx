import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState(null)

    // useEffect(() => {
    //     fetch("https://api.github.com/users/tarunkoshti")
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // }, [])

    return (
        <div className='bg-zinc-500 text-2xl text-white text-center p-2'>
            Github Followers:{data.followers}
            <img src={data.avatar_url} alt="github picture" width="200px" />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch("https://api.github.com/users/tarunkoshti")
    return res.json()
}
