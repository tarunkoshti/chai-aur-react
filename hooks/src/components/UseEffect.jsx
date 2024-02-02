import React, { useEffect, useRef, useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0)
    const a = useRef(0)

    useEffect(() => {
        document.title = `Count (${count})`
        console.log("after dom updation  hello inside")
        a.current = a.current + 1
    })

    console.log("first dom update hello outside")

    return (
        <div>
            <h1>{count}</h1>
            <h1>{a.current}</h1>
            <button onClick={() => setCount(count + 1)}>click</button>
        </div>
    )
}

export default UseEffect
