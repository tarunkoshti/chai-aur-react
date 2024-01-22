import React from 'react'
import { useState } from 'react'

const App = () => {

  let [counter, setcounter] = useState(0)
  // let counter = 0;

  const Add = () => {
    // console.log(counter)
    // counter++;
    if (counter < 20) {
      // setcounter(counter + 1)
      // setcounter(counter + 1)
      setcounter(prevCounter => prevCounter + 1)
      setcounter(prevCounter => prevCounter + 1)

    }
  }

  const Remove = () => {
    // console.log(counter)
    // counter++;
    if (counter > 0) { setcounter(counter - 1); }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h3>Counter value: {counter}</h3>
      <button onClick={Add}>increase value: {counter}</button>
      <br />
      <button onClick={Remove}>decrease value: {counter}</button>
    </>
  )
}

export default App
