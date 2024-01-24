import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

const App = () => {

  const [length, setlenght] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "01234567890"
    if (charAllowed) str += "!@#$%^&*"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)

  }, [length, numberAllowed, charAllowed, setpassword])

  const copyPasswordToClipbord = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange()
    window.navigator.clipboard.writeText(password) 
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setpassword])
  

  return (
    <>
      {/* <div className='w-full h-screen'> */}
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-white bg-zinc-500'>
        <h1 className='mb-2 text-center'>Password Generator</h1>
        <div className=' flex shadow rounded-lg overflow-hidden mb-4'>

          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 text-black'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />

          <button onClick={copyPasswordToClipbord} className='outline-noe bg-blue-700 text-white px-3 py.5 shrink-0 active:mix-blend-overlay'>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={8}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setlenght(e.target.value) }}
          />
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setnumberAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setcharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default App
