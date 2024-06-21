import React from "react";
import { useEffect,useState } from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import {add,remove} from '../redux/Slices/CartSlice'
import toast from "react-hot-toast";
import './Cartitem.css';
const Cartitem=({item})=>{

  const dispatch=useDispatch();

  function removefromCart()
  {
    dispatch(remove(item.id));
    toast.error("Item removed");
  }
   return (
    <div className="it">
      <div>
        <img src={item.image} height={180} width={150}/>
        </div>

        <div className="it1">
          <h5>{item.title}</h5>
          <h5>{item.description.split(" ").slice(0,10).join(" ")+"..."}</h5>
          <div className="it2">
            <p className="e">${item.price}</p>
            <div onClick={removefromCart}>
            <FcDeleteDatabase className="q"/>
            </div>
          </div>
        </div>
    </div>
   )
};

export default Cartitem;