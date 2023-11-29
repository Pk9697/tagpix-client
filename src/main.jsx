import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthContextProvider } from './context/authContext'
import { LabelContextProvider } from './context/labelContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <LabelContextProvider>
        <App />
      </LabelContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
