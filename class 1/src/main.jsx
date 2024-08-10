import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QrCode } from './QrCode'
// import App from './App.jsx'
// import './index.css'
import './qrcode.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <QrCode />
  </StrictMode>,
)
