import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

function Myapp() {

  return (<div><h1>Hello, React!</h1></div>)
}

const reactElement=React.createElement(
  'a',
  {
    href:'https://www.google.com',
    target:'_blank'
  },
  'Click for Google'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Myapp/>
    {reactElement}
  </StrictMode>,
)
