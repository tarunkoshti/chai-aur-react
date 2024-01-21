import React from 'react'
import Card from './components/Card'

const App = () => {
  const myObj = {
    name: "tarun",
    age: 21
  }

  const myArr = [1,2,3]
  return (
    <>
      <h1 className=''>Tailwind test</h1>
      <Card username="Tarun" btntext="visit tarun"/>
      <Card username="Prashant" btntext="visit prashant"/>
    </>
  )
}

export default App
