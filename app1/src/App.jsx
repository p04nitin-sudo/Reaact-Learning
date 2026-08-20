import Chai from './nitin.jsx' // import Chai component from nitin.jsx
import Header from './component/header.jsx';
import Fotter from './component/Fotter.jsx';//default import
import { Comp1,Comp2} from './other.jsx';//named import
function Content(){
  return <h1>this is content</h1>
}
function Main(){
  return (
     <>
    <div style={{
      backgroundColor:"#ccc",
    }}> 
    <Header/>
    <Content/>
    <Comp1/>
    <Comp2/>
    <Fotter/>
    <Chai/>{/* call component from different file */}
    </div>
    </>
  );
}
export default Main;




