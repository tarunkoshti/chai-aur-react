import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/profile'
const App = () => {
  return (
    <div>
      Context API
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>

    </div>
  )
}

export default App
