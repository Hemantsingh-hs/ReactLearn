import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data=useLoaderData();
//    const [data,setData]=useState([]);
//     useEffect(() => {
     
//         fetch('https://api.github.com/users/Hemantsingh-hs')
//         .then(response=> response.json())
//         .then(data=>{
//             console.log(data)
//             setData(data);
    
//         })
//     },[])
    return(
        <div className="mx-auto w-full max-w-7xl text-center bg-amber-50">
            <h1>GitHub Profile</h1>
            <p>This is the GitHub profile page.</p>
            <p>Github Followers:{data?.followers} {" "} and Repositories: {data?.public_repos}</p>
             <img className="text-center" src={data?.avatar_url} width="200" alt="GitHub Avatar" />
        </div>
    )
}export default Github;

export const githubInfoLoader=async()=>{
   const response=await fetch('https://api.github.com/users/Hemantsingh-hs')

   return response.json();
}