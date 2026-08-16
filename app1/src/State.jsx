import { useState } from "react";
let Hello=()=>{

let [name,setName]=useState("NITIN")
let [age,setAge ]=useState(23)


let handleSubmit=(e)=>{
e.preventDefault();
console.log("hello")

}
  
    return (
      
         <form  onSubmit={handleSubmit}>
        <input 
         value={name}
         onChange={(e)=>{
            setName(e.target.value)
         }}
        />
        <input 
         value={age}
         onChange={(e)=>{
            setAge(e.target.value)
         }}
        />
        <button type="submit"> </button>
        
        
          <h1>{name}  "ki age" {age} hai</h1>
         </form> 
      

    );
}
export default Hello;