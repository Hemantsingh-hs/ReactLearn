import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');



  const [details,setDetails]=useState({count:0,name:""})
  const add=()=>{

    // setCount(count+1);
    setDetails((prevDetails) => ({ ...prevDetails, count: prevDetails.count + 1 }));
  }
const reduce=()=>{
  // setCount(count-1);
  setDetails((prevDetails) => ({ ...prevDetails, count: prevDetails.count - 1 }));
}

  //  useEffect(()=>{
  //  document.title=`You clicked ${count} times`

  //  })

  //   useEffect(()=>{
  //  document.title=`You clicked ${count} times`;

  //  },[]);

  const [otherCount,setOtherCount]=useState(0);
 useEffect(()=>{

  document.title=`${otherCount} times`
 }, [otherCount]);

 const [time,setTime]=useState(0);
 useEffect(()=>{

    const timer = setInterval(()=>{
  setTime(time+2)
  },1000);
  return()=>{
    clearInterval(timer);
  }
 });


  return (
    <>
    <button onClick={add}>Increase</button>
    <button onClick={reduce}>Decrease</button>
    <p>{details.count} and {details.name}</p>

    <input type="text"  onChange={(e)=>setDetails((prevDetails) => ({ ...prevDetails, name: e.target.value }))} />
  <br></br>
  <button onClick={()=>setOtherCount(otherCount+5)}>Increase Other Count</button>
  <p>Other Count by 5</p>

  <h2>Time: {time}</h2>
    </>
  )
}

export default App
