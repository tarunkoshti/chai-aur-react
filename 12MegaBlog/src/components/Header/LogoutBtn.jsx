import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/Reducers/authSlice'
import { useNavigate } from 'react-router-dom'

const LogoutBtn = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            navigate("/")
        })
    }

    return (
        <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}>
            Logout
        </button>
    )
}

export default LogoutBtn
