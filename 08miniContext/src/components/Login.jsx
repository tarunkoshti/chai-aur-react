import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { setUser } = useContext(UserContext)

    const SubmitHandler = (e) => {
        e.preventDefault();
        setUser({ username, password })
    }

    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder='Enter username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input type="text" placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={SubmitHandler}>Login</button>

        </div>
    )
}

export default Login
