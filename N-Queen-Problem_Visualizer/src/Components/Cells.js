import React from 'react';
import Cell from './Cell';

import './style.css';
const Cells = (props) =>{
  return (
    <div className='booard m-5' >
        {props.board.map( (row,rowidx)=>{
            return(
                <div key={rowidx}>
                    {row.map( (cell,cellidx)=>{
                        return(
                            <Cell
                                key={cellidx}
                                cell={cell}/>
                        );
                    } )}
                </div>
            );
        } )}
    </div>
);

}

export default Cells;