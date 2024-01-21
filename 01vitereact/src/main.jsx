import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const username = "tarun koshti"

const MyApp = () => {
    return (
        <div>
            <h1>Custom App | chai {username}</h1>
        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com">Click me to vist google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com', target: '_blank'
    },
    'click me to visit google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <MyApp/>
    // reactElement
    // <App/>
)
