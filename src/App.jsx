import React from 'react'
import Provider from './context/provider'
import Home from './Home'
import Profile from './profile'
function App() {
  return (
    <>
     <Provider>
    <Home/>        
    <Profile/>        
     </Provider>
      
    
    </>
  )
}

export default App