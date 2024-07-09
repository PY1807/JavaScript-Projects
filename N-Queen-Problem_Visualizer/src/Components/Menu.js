import React from 'react'
import {useState} from 'react';
import './style.css'
const Menu = (props) =>{
  const [num,setnum]=useState(4);
  function changeHandler(event)
  {
    console.log(props.visited);
    console.log(props.isRunning);//!props.visited &&
       if(  !props.isRunning)
        {
          setnum(event.target.value)
          props.onCountChange(event.target.value)
        }
        
      
    
  }
  function clickHandler()
  {
    if(!props.visited)
      {
        props.onVisualize();
      }
  }
return (
  <nav className="nav">
                
                <button
                    className='btn btn-secondary m-2'
                    onClick={props.onClear}
                    
                >
                    Clear Board
                </button>
                <label className='Ut'>
             <p className="num"> <br/>Number Of Queens </p>
            <select 
            required
            name="country"
            value={num}
            onChange={changeHandler}
          >
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
</label>

                <button
                    className='btn btn-warning btn-lg '
                    onClick={clickHandler}
                    style={{ cursor: props.visited ? 'not-allowed' : 'pointer' }}  
                >
                    Visualize
                </button>

            </nav>

)
}

export default Menu;