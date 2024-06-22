import React, { useEffect, useState } from "react";
import './Random.css';
import Spinner from "./Spinner";


const API_KEY = 'MY_API_KEY';

const Random = ()=>
  {
    
    console.log("ha")
    const[gif,setgif]=useState('');
    const[loading,setloading]=useState(false);
    
    async function fetchdata()
    {
      const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      
     
      try
      {
        setloading(true);
        const response= await fetch(url);
        
        const {data}=await response.json();
        
        const image= data.images.
        downsized_large.url;
        
        setgif(image);
        setloading(false);
      }
      catch(error)
      {
        console.log("Data nhi aa paya");
      }
      
    }
    useEffect(()=>{
      fetchdata()
    },[])

    function clickHandler()
    {
      fetchdata();
    }
    return (
    <div className="Random1">

    <h1>Random Gif</h1>

    {loading?(<Spinner/>):(<img src={gif}  width={700} height={500} className="image"/>)}
     
    {/* alt="Image is not available" */}

    <button onClick={clickHandler} className="button">Generate</button>
    </div>
  );
  }

  export default Random;
