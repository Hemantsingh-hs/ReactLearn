import { useState ,useCallback,useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number,setNumber]=useState(false)
  const [symbol,setSymbol]=useState(false)
  const [password,setPassword]=useState("")
  const passwordGenerator=useCallback(()=>{
    
    //useRef is used to store the previous value of the password and compare it with the new value to avoid unnecessary re-renders.
    
    
    let pass=""
    let str="ABCDEFGHIJKLMxNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number){
      str+="0123456789"
    }
    if(symbol){
      str+="!@#$%^&*()-+"
    }
    for(let i=1;i<=length;i++){
      
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,number,symbol,setPassword])

  const passwordRef=useRef(null)

  const copyPassword=()=>{
    passwordRef.current.select()
    passwordRef.current.setSelectionRange(0, length)
    window.navigator.clipboard.writeText(passwordRef.current.value) }


  useEffect(()=>{  passwordGenerator()},
  [length,number,symbol,passwordGenerator])
  

  return (
    <>
     <h1 className="text-4xl  text-center text-white my-3">Password Generator</h1>
    <div className='w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>

      <div className='flex shadow-sm rounded-lg overflow-hidden mb-4'>
       <input type="text" value={password}  ref={passwordRef} placeholder="Generated Password" readOnly className='w-full px-4 py-2 text-gray-700 focus:outline-none' />
      <button onClick={copyPassword} className='bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 focus:outline-none'>Copy</button>
      
      </div>
   
   <div className='flex items-center mb-4'>
   <div className='w-full px-4 py-2 text-gray-700 focus:outline-none'>
    <input type="range" min={6} max={100} value={length} 
    className='cursor-pointer' onChange={(e) => setLength(e.target.value)}/>
    <label className='ml-2 text-white'>Length: {length}</label>

   </div>
<div className='flex items-center gap-x-1'>
<input type="checkbox" checked={number} onChange={(e)=>setNumber((prev)=>!prev)}  />
<label className='text-white p-2 gap-x-1'>Numbers</label>
</div>

<div className='flex items-center gap-x-1'>
<input type="checkbox" checked={symbol} onChange={(e)=>setSymbol((prev)=>!prev)}  />
<label className='text-white p-2 gap-x-1'>Special</label>
</div>
   </div>

    </div>

    </>
  )
}

export default App
