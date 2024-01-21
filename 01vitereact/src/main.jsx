import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const MyApp = () => {
    return (
        <div>
            <h1>Custom App | chai</h1>
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

const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com', target: '_blank'
    },
    'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)
