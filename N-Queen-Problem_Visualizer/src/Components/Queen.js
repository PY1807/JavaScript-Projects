// 

import React, { useState, useEffect } from 'react';
import Menu from './Menu'; // Ensure this path is correct
import Cells from './Cells';
import './style.css'

const Queen = () => {
  const [board, setBoard] = useState([]);
  const [num, setNum] = useState(4);
  const [isRunning, setIsRunning] = useState(false);
  const [vis,setvis]=useState(false);
  useEffect(() => {
    const initialBoard = getBoard(num);
    setBoard(initialBoard);
  }, [num]);

  function getBoard(N) {
    const rows = [];
    for (let i = 0; i < N; i++) {
      const cols = [];
      for (let j = 0; j < N; j++) {
        cols.push(getCell(i, j));
      }
      rows.push(cols);
    }
    return rows;
  }

  function getCell(row, col) {
    return {
      row,
      col,
      isPresent: false,
      isChecked: false,
      isAttacked: false,
      isCurrent: false,
    };
  }

  
  function handleClear () {
    if(!isRunning)
      {
        const board = getBoard(num);
        setBoard(board);
        setvis(false);
      }
    
}
  function handleQueenChange(number) {
    setNum(number);
    const newBoard = getBoard(number);
    if(!isRunning)
      setvis(false)
    setBoard(newBoard);
  }
  function turnOffAttack(board, N){
    const newBoard = board.slice();
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            newBoard[i][j] = {...newBoard[i][j], isChecked: false, isAttacked: false, isCurrent: false};
        }
    }
    return newBoard;
}
 async function startAlgo(){
  setIsRunning(true);
  setvis(true);
    const newBoard = board.slice();
   
    await queensAlgo(newBoard,0);
    const newBoard2 = turnOffAttack(board,num);
    
    setBoard(newBoard2);
    setIsRunning(false);
    
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function getChecked (board,row,col,N){
  const newBoard = board.slice();
  let pos = true;
  // same col
  for( let i = 0;i < N;i++ ){
      if( newBoard[row][i].isPresent ){
          newBoard[row][i] = {...newBoard[row][i],isAttacked:true};
          pos = false;
      } else{
          newBoard[row][i] = {...newBoard[row][i],isChecked:true};
      }
  }
  // same row
  for( let i = 0;i < N;i++ ){
      if( newBoard[i][col].isPresent ){
          newBoard[i][col] = {...newBoard[i][col],isAttacked:true};
          pos = false;
      } else{
          newBoard[i][col] = {...newBoard[i][col],isChecked:true};
      }
  }
  for( let i = row,j = col; i >= 0 && j >= 0; i--, j--){
      if( newBoard[i][j].isPresent ){
          newBoard[i][j] = {...newBoard[i][j],isAttacked:true};
          pos = false;
      } else{
          newBoard[i][j] = {...newBoard[i][j],isChecked:true};
      }
  }
  for( let i = row,j = col; i <N && j >= 0; i++, j--){
      if( newBoard[i][j].isPresent ){
          newBoard[i][j] = {...newBoard[i][j],isAttacked:true};
          pos = false;
      } else{
          newBoard[i][j] = {...newBoard[i][j],isChecked:true};
      }
  }
  for( let i = row,j = col; i <N && j < N; i++, j++){
      if( newBoard[i][j].isPresent ){
          newBoard[i][j] = {...newBoard[i][j],isAttacked:true};
          pos = false;
      } else{
          newBoard[i][j] = {...newBoard[i][j],isChecked:true};
      }
  }
  for( let i = row,j = col; i>=0 && j < N; i--, j++){
      if( newBoard[i][j].isPresent ){
          newBoard[i][j] = {...newBoard[i][j],isAttacked:true};
          pos = false;
      } else{
          newBoard[i][j] = {...newBoard[i][j],isChecked:true};
      }
  }

  newBoard[row][col] = {...newBoard[row][col],isPresent:true,isCurrent:true};

  return [newBoard,pos];
}
async function queensAlgo (board,col) {

  if( col>=num ){
      return true;
  }

  let newBoard = board.slice();
  for( let i = 0; i < num;i++ ){


      newBoard = turnOffAttack(newBoard,num);
      const result = getChecked(newBoard,i,col,num);
      newBoard = result[0];

      setBoard(newBoard);
      await sleep(600);
      if( result[1] ){
          const res = await queensAlgo(newBoard,col+1)
          if( res === true){
              return true;
          }
          newBoard[i][col] = {...newBoard[i][col],isPresent:true,isCurrent:true};
          setBoard(newBoard);
          await sleep(600);
          newBoard[i][col] = {...newBoard[i][col],isPresent:false,isCurrent:false};
          setBoard(newBoard);

      }
      newBoard[i][col] = {...newBoard[i][col],isPresent:false,isCurrent:false};
      newBoard = turnOffAttack(newBoard,num);
      setBoard(newBoard);
      await sleep(600);
  }
  return false;
}




  return (
    <div className="Queen">
      <div>
        <h1>N - Queen Problem Visualizer</h1>
      </div>
      <br/>
      
      
     <Menu onCountChange={handleQueenChange}
     onVisualize={startAlgo}
     onClear={handleClear}
     visited={vis}
     isRunning={isRunning} /> 
      <div style={{ textAlign: "Center" }}> 
        {/* Add Cells component if necessary */}
        <Cells board={board} />
      </div>
    </div>
  );
};

export default Queen;
