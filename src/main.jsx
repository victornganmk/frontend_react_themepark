import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/hotel_rooms.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
