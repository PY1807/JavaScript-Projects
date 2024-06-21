import React from "react";
import { useState,useEffect } from "react";
import Spinner from "../Components/Spinner";
import Product from "../Components/Product";
import './Home.css'
const Home=()=>{
    const API="https://fakestoreapi.com/products";
    console.log(API)
    const [loading,setloading]=useState(false);
    const [posts,setposts]=useState([])
    
    async function fetchposts()
    {
      setloading(true);
      try
      {
       const res= await fetch(API);
       const data= await res.json();
       console.log(data);
       setposts(data);
      }
      catch(error)
      {
        console.log("error aa gaya hai correct karo")
      }
      setloading(false);
    }
    useEffect(()=>{
      fetchposts();
    },[])
  
    return (
      <div>
        {
  
  loading?(<Spinner />)
  : posts.length>0?
  (
   <div className="yes">
     {
          posts.map((post)=>(
           <Product key={post.id} post={post} className="pro"/>
          ))
     }
  </div>
  ):(<div className="no">
   <p>No data found</p>
   </div>)
  
        }
       
      </div>
    )
};

export default Home;