import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserPage from './sections/Users/UserPage.jsx'
import ArtImagePage from './sections/Art/ArtImagePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<App />}/>
        <Route path= "/image/:id" element={<ArtImagePage/>} />
        <Route path= "/user/:id" element={<UserPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
