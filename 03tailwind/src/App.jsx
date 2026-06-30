import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Card from './components/Card.jsx'
// import Image from "next/image";

function App() {
  const [count, setCount] = useState(0)
 let name="best channel"

 let arr=[4,5,5,6,7]
  return (
    <>
   <h1 className='bg-green-500 text-blue p-4 rounded-xl text-center mx-55'>Hello, Tailwind CSS!</h1>   
   <Card username="Chai or code" btn="Click me" />
   
   <Card username="Web Dev Simplified" btn="Check more"/>
    </>


  )
}

export default App
