import React from 'react'
import './App.css'
import config from './config/config'


const App = () => {
  console.log(import.meta.env.VITE_APPWRITE_URL)
  console.log(config.appwriteProjectId)
  return (
    <div>
      <h1>A blog app with Appwrite</h1>
    </div>
  )
}

export default App
