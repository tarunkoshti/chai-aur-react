import React, { useRef } from 'react'

const UseRef = () => {

    const myRef = useRef()

    const ClickHandler = () => {
        console.log(myRef)
        myRef.current.focus()
    }

    return (
        <div>
            <input ref={myRef} type="text" />
            <button onClick={ClickHandler}>change in input field</button>
        </div>
    )
}

export default UseRef
