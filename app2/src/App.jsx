import { useState } from "react";
function chai(){
  let [counter,setCount]  =useState(0);
  function addnum(){
    if(counter<15){
     setCount(counter+1);
    }
    else{
      setCount(counter=0)
    } 
  }
  const subNum=()=>{
    if(counter>0){
     setCount(counter-1);
    }
    else{
      setCount(counter=0)
    }
  }
return (
  <> 
  <div style={{backgroundColor:"#cccc"}}>
   <h1>count is {counter}</h1>
   <button onClick={addnum} style={{backgroundColor:"yellow"}}>increasing </button>
   
   <button onClick={subNum} style={{backgroundColor:"#00ff00"}}>decreasing</button>
   <h2>Mission is succesfull</h2>
   </div>
  </>
);

}


export default chai;
