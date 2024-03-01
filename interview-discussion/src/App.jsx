import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [value, setValue] = useState(1)
//   // const [multipliedValue, setMultipliedValue] = useState(1)
//   let multipliedValue = value * 5

//   const mutiplyByFive = () => {
//     // setMultipliedValue(value * 5)
//     setValue(value + 1)
//   }

//   return (
//     <>
//       <h1>Main Value: {value}</h1>
//       <button onClick={mutiplyByFive}>Click to multipy by 5</button>
//       <h2>Multiplied Value: {multipliedValue}</h2>
//     </>
//   )
// }

function App() {
  console.log("hello")
  // state change nahi ho rahi isiliye hai  app rerednder nahi hogi
  // const [value, setValue] = useState(1)
  const [value, setValue] = useState({
    value: 0
  })


  const clickMe = () => {
    console.log("clicked")
    // setValue(value + 1) // yahan state change ho rahi hai to app rerender hogi

    // setValue(1)
    // yahan value me koi chnages nahi hai to state update nahi hogi or na app rerender

    // setValue(3)
    // yahan value me chnages hai to state update nahi hogi or app rerender hogi 2 times

    setValue({
      value: 0
    })
    // yahan hum ek object set kar rahe hai or object reference type hota hai
    // means is obejct ka reference set hoga jo ki state ke liye naya hoga
    // isiliye state me ek new object set hoga or app rerender hogi
    
    // note : premitive datatypes me actual me values pass hoti hai  (pass by value)
    //        reference datatypes me values ka reference pass hota hai (pass by reference)
  }

  return (
    <>
      {/* <h1>Main Value: {value}</h1> */}
      <h1>Main Value: {value.value}</h1>

      <button onClick={clickMe}>click</button>
    </>
  )
}

export default App
