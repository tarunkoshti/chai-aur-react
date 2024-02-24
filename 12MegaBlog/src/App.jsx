import React from 'react'
import './App.css'
import conf from './conf/conf'


const App = () => {
  console.log(import.meta.env.VITE_APPWRITE_URL)
  console.log(conf.appwriteProjectId)
  return (
    <div>
      <h1>A blog app with Appwrite</h1>
    </div>
  )
}

export default App
