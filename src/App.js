import React,{useState} from "react";
function App (){
  const [state, setState]=useState({arr:4,theme:"blue"})
  const arr=state.arr
  const theme=state.theme
  
  function decrementArr(){
    setState(prevState=>{
      return {arr:prevState.arr-1}
    
  })
}
  function incrementArr(){
    setState(prevState=>{
      return {arr:prevState.arr+1 }
  }) 
}
  return (
    <>
    <button onClick={decrementArr}> - </button>
    <span>{arr}</span>
    <span>{theme}</span>
    <button onClick={incrementArr}>+</button>
    </>
  )
  }
 
export default App;