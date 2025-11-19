import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Merch from './pages/Merch'
import Partner from './pages/Partner'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/partner" element={<Partner />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
