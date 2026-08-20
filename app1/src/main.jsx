import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tea from './nitin.jsx'
import Fun from './nitin2.jsx'
import List from './passGenerator.jsx'
import Prop from './Prop.jsx'
import Hello from "./State.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <List/>
  
  

  </StrictMode>,
)
