import './index.css'
import Chai from './State.jsx'
let Parent=()=>{
    let arr=["hello ","hii ","good ","night"];
    let obj={
        name:"chutiya",
        college:"goel",
        add:"lucknow"
    }
return(
<>
< Chai/>
<h1>hello parent  ji</h1> 
{/* <Child a={arr} b={obj}  /> */}

</>
); 
}

let Child=(prop)=>{
    let {a,b}=prop//destrucring
return (
<>

<div className="hello">
<h1> {a} </h1>
<h1> {prop.b.college} </h1>
<h1> {b.add} </h1>
<h1> {b.name} </h1>
</div>

</>    
);
}

export default Parent;

