import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'   // ✅ yaha default import ho raha hai

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

