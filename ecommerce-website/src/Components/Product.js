import React from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {add,remove} from '../redux/Slices/CartSlice'
import './Product.css'
const Product=({post})=>{

  const {cart}=useSelector((state)=>state)
  const dispatch=useDispatch();
  console.log(cart)
  function addToCart()
  {
    console.log("ha")
    dispatch(add(post));
    toast.success("Item Added");
  }

  function removeFromCart()
  {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }


  return (
   
   <div className="out4">
     
     <div className="in4">
       <div className="head"> 
      <p>{post.title}</p>
    </div>
    <div className="des">
      <p>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
    </div>
    <div>
      <img src={post.image} alt="Na" height={150} width={150} />
    </div>
    <div className="pr">
    <div>
      <p className="pi">${post.price}</p>
    </div>
    
      {
        (cart.some((item)=>item.id===post.id)) ?
         (<button onClick={removeFromCart}
         className="btn">Remove Item</button>) : (<button onClick={addToCart} className="btn">Add Item to Cart </button>)
      }
    </div>
    
    </div>
    
   </div>
  )
};

export default Product;