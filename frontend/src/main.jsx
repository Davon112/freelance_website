import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './routes/Contact.jsx'
import Service from './routes/Service.jsx'
import Consultation from './routes/Consultation.jsx'


const router = createBrowserRouter([
  {path:'/', element:<App />},
  {path:'/contact', element:<Contact />},
  {path:'/services', element:<Service />},
  {path:'/consultation', element:<Consultation />},

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
