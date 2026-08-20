import React from 'react'
import themeContext from './context/createContext'
import { useContext } from 'react'

function Home() {

  const [username,setUsername]=React.useState("")
   const {setUser}=useContext(themeContext)

function hancleClick(){
  setUser(username)

}
    return (
    <>
            

         <input type="text"
           value={username}
           onChange={(e)=>{
            setUsername(e.target.value)
           }}
         />      
         
         <button onClick={hancleClick}>click me for anything</button>
      

    
    </>
  )
}

export default Home