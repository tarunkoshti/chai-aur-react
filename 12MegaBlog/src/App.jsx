import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/Reducers/authSlice'
import './App.css'
import authService from './appwrite/auth'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
import { Header, Footer } from './components/index'

import { Outlet } from 'react-router-dom'
import { Editor } from '@tinymce/tinymce-react'
// import conf from './conf/conf'


const App = () => {
  // console.log(import.meta.env.VITE_APPWRITE_URL)
  // console.log(conf.appwriteProjectId)

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          {/* <Outlet /> */}
          <Editor />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
