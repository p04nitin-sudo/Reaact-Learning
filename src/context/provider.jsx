import React from 'react'
import themeContext from './createContext'

function Provider({children}) {
 const [user,setUser]=React.useState("Hitesh sir")
  return (
   <>
    <themeContext.Provider value={{user,setUser}}>
      {children}
       

    </themeContext.Provider>
   
   
   
   </>
  )
}

export default Provider