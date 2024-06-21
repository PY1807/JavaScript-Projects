
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../logo1.png"
import './Navbar.css'
import { useSelector } from "react-redux";
const Navbar=()=>{
  const {cart}=useSelector((state)=>state)
  return (
    <div className="ha">

     <div className="in">
      
     <NavLink to="/">
    <div>
      <img src={logo} alt="No Image" className="img"/>
    </div>
   </NavLink>
   <div className="out">
    <NavLink to="/">
      <p className="ho">Home</p>
    </NavLink>
    <NavLink to="/cart">
      <div className="icon">
      <FaShoppingCart className="shop">
      </FaShoppingCart>
      {
        cart.length >0 && 
        <span className="sp">{cart.length}</span>
        }
      </div>
    </NavLink>

   </div>

     </div>
     
     
    </div>
   
  )
};

export default Navbar;