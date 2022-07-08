import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import "./index.scss"

function createRoot() {
    const root = document.createElement('div')
    root.id = "root"
    document.body.appendChild(root)

    return root
}

const root = document.getElementById("root") || createRoot();

ReactDOM.render(<App />, root)