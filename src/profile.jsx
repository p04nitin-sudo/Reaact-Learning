import React, { useContext } from 'react'
import themeContext from './context/createContext'


function Profile() {
  const {user}=useContext(themeContext);
  if(!user) return <div>please login</div>

    return <div>welcome {user.username}</div>
}

export default Profile