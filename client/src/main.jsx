import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App 
    // This is NOT HTML. It's JSX, which gets turned into JavaScript.
const myName = "Alex";
const element = <h1 className="greeting">Hello, {myName}!</h1>;
// The {myName} part is JavaScript being embedded./>
  </StrictMode>,
)
