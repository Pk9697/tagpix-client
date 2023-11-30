import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthContextProvider } from './context/authContext'
import { LabelContextProvider } from './context/labelContext'
import { PostContextProvider } from './context/postContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <LabelContextProvider>
        <PostContextProvider>
          <App />
        </PostContextProvider>
      </LabelContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
