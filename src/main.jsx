import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { InferenceContextProvider } from './contexts/InferenceContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <InferenceContextProvider>
    <App />
  </InferenceContextProvider>,
)
