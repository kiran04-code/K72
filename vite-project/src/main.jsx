import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import Staire from './components/commen/Staire.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Staire>
    <App />
   </Staire>
    
   </BrowserRouter>
  </StrictMode>,
)
