import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/ofertas.css'
import App from './app2'


createRoot(document.getElementById('root2')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
