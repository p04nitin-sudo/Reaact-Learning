import { useState } from "react";

let Input=()=>{

let [item,setItem]=useState("")
let [content,setContent]=useState("")
let [res,setRes]=useState([])
let submitHandler=(e)=>{
    e.preventDefault();
    let copyRes=[...res]
    copyRes.push({item,content})
    setRes(copyRes);
    console.log(res)
}
    
return (

<div>
<h1 style={{
    backgroundColor:"pink",
    padding:"30px",
    borderRadius:"10px"

}}>TO DO LIST</h1>

  <div style={{
    borderRadius:"40px",
    backgroundColor:"pink",
    padding:"40px 50px"
  }}>     
     <form action=""
       onSubmit={(e)=>{
        submitHandler(e)
       }}
     >
      <input type="text" 
      value={item}
        onChange={(e)=>{
            setItem(e.target.value)
        }}
      />
      <input 
      style={{
        margin:"20px"
      }}
      type="text"
      value={content}
      onChange={(e)=>{
        setContent(e.target.value)
      }}
        
      />
      <button style={{
        margin:"40px",
        borderRadius:"40px",
        backgroundColor:"#ff0000",
        padding:"10px"
      }}>click me</button>



     </form>
  </div> 
  {
  res.map((p,index)=>(
    <div style={{
        padding:"25px",
        border:"4px solid black",
        borderRadius:"10px",
        width:"50%",
        margin:"20px"
    }}
    
     key={index}>
        <h1 style={{
            backgroundColor:"green",
            border:"2px solid black",
            margin:"10px",
            padding:"10px",
            fontFamily:"cursive"
        }}>here is task</h1>
        
        <h1 style={{
            backgroundColor:"white",
            border:"2px solid black",
            margin:"10px",
            padding:"10px",
            fontFamily:"cursive"
        }}
        >{p.item}</h1>
        <h1 style={{
            backgroundColor:"orange",
            border:"2px solid black",
            margin:"10px",
            padding:"10px",
            fontFamily:"cursive"

            
        }}
        >{p.content}</h1>

        
    </div> 
   ) )}
  </div>

  
   
   );
}
export default Input;