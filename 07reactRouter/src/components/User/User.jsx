import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userId, Id } = useParams()
    return (
        <div className='text-center bg-zinc-500 text-white py-2 text-2xl'>
            User:{userId}
            <br />
            Id:{Id}
        </div>
    )
}

export default User
