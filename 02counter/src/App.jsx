 import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
let  [count,setCount]=useState(0);
// let count=0;
const addValue=()=>{
  // console.log("value Added",Math.random());


  //  count++;
  if(count<20){
    setCount(preCounter=>preCounter+1);

    setCount(preCounter=>preCounter+1);
  }
  else{
    alert("value is greater than 20 not allowed");
  }
  //  console.log("count value",count);
}
const removeValue=()=>{

  if(count>0){
     
    setCount(count-1);
  }
  else{
    alert("value is less than 0");
  }
}
  return (
    <>
      <h2>Counter App</h2>
      <h3>Counter value {count }</h3>

      <button onClick={addValue}>Add value</button>
      <br></ br>
      <button onClick={removeValue}>Remove value</button> 
      
      <p>footer</p>
      </>
  )
}

export default App
