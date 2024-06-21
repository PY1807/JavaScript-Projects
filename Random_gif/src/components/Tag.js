import React, { useEffect, useState } from "react";
import './Tag.css';
import Spinner from "./Spinner";


const API_KEY = 'GQxRJpgkqesgz73WKdZOrULqnEPrg1sl';

const Tag = ()=>
  {
    
    console.log("ha")
    const[tag,settag]=useState('');
    const[gif,setgif]=useState('');
    const[loading,setloading]=useState(false);
    
    async function fetchdata()
    {
      const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
     
      try
      {
        setloading(true);
        const response= await fetch(url);
        
        const {data}=await response.json();
        
        console.log(data);

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
    function changeHandler(event)
    {
      settag(event.target.value);
    }
    return (
    <div className="Random">

    <h1>Random Gif</h1>

    {loading?(<Spinner/>):(<img src={gif}  width={700} height={500} className="image"/>)}
     
    {/* alt="Image is not available" */}
    <input 
    className="text1"
    type="text"
    onChange={changeHandler}
    value={tag}
    />

    <button onClick={clickHandler} className="button">Generate</button>
    </div>
  );
  }

  export default Tag;