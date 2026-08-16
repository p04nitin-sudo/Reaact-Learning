import { useCallback, useState } from "react";

let Chai=()=>{

let [length,setLength]=useState(10)
let [numallow,setNumallow]=useState(false)
let [charallow,setCharallow]=useState(false)
let [pass,setPass]=useState("")

let generatePass=useCallback(()=>{
let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let res=""
  
  if(numallow){ str+="0123456789"}
  if(charallow){str+="@#$%&[{\/?()}]"}

  for(let i=1;i<=length;i++){
    let idx=Math.floor(Math.random()*str.length+1)
    res+=str.charAt(idx);
  }

  setPass(res)
   console.log(res)

},
[length,numallow,charallow,setPass])

let copyPass=()=>{
navigator.clipboard.writeText(pass)
}
return (
   <>
 <h1 > PASSWORD GENERATOR</h1>
  <div className="parent">
<div>
 <div className="pass">
<input  type="text"
      value={pass}
    />
    <button onClick={copyPass}>copy</button>
 </div>

    <div className="checkbox">
<input type="range"
      className="length"
      min="4"
      max="32"
      value={length} 
      onChange={(e)=>{
        setLength(e.target.value)
      }}
      
    />
    <input type="checkbox" 
      checked={numallow}
      onChange={(e)=>{
        setNumallow(e.target.checked)
      }}
      
    />

    <input type="checkbox" 
      checked={charallow}
      onChange={(e)=>{
        setCharallow(e.target.checked)
      }}
      
    />

    </div>
</div>
    

   
    

    <button onClick={generatePass} >generate Password</button>
    

  </div>

</>
);

}

export default Chai;