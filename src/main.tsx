import './styles/global.scss'

import App from './App.tsx'
import { ItemsContextProvider } from './context/ItemsContext.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ItemsContextProvider>
      <App />
    </ItemsContextProvider>
  </React.StrictMode>,
)
