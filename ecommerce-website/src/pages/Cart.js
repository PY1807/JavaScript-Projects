import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Cartitem from "../Components/Cartitem";

import './Cart.css';
const Cart=()=>{

  const {cart}=useSelector((state)=>state)
  const [totalamount,setTotalAmount]=useState(0);
  useEffect(()=>{
  setTotalAmount(cart.reduce((acc,item)=>acc+item.price,0))},[cart])
  return (
    <div >
      
      {
  
 cart.length>0 ?
 (<div className="ca" >
   
   <div className="t">
    <div className="z"> 
    {
       cart.map((item,index)=>{
     return <Cartitem key={item.id} item={item} itemIndex={index}/>
       }  )
     }
      </ div>
     
       <div />

   <div className="details">
     <div>
     <div className="Your">Your Cart</div>
     <br></br>
     <div className="Sum">Summary</div>
     <br>
     </br>
     <br></br>
    <p >
     <span className="an">Total Items: {cart.length}</span>
    </p>
     </div>
    <br></br>
     <div>
       <p className="To">
        Total Amount : ${totalamount}
       </p>
       <button className="but">
         CheckOut Now
       </button>
     </div>
    </div>

   </div>
   </div>):
   (<div className="Empty">
       <h1>Cart Empty</h1>
       <NavLink to="/">
         <button className="bt">
           Shop Now
         </button>
       </NavLink>
     </div>)
      }
      </div>
)
}

export default Cart;