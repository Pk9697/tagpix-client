import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthContextProvider } from './context/authContext'
import { PostLabelContextProvider } from './context/postLabelContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostLabelContextProvider>
        <App />
      </PostLabelContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
