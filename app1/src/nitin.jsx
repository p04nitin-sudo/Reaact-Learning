import { useEffect, useState } from "react";
// import './index.css'
let Chai=()=>{
    
let [count1,setCount1]=useState(0)
let [count2,setCount2]=useState(0)
let [col,setCol]=useState("brown")




useEffect(()=>{
setCol("red")   
},[count1]);

useEffect(()=>{
setCol("green")        
},[count2]);

return (

    <div style={{
        backgroundColor:col,
        minHeight:"100vh"
    }}>
     <h1>"count1 ki value" + {count1}</h1> 
     <h1>"count2 ki value" + {count2}</h1> 
     
<button onClick={()=>setCount1(count1+1)}>increase</button>
<button onClick={()=>setCount2(count2+1)}>decrese</button>
         




    </div>
);
    
}
export default Chai;