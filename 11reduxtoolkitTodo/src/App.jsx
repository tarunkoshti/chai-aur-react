import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


const App = () => {
  return (
    <div>
      redux tookit
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
