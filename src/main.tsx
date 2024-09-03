import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'typeface-open-sans';
import { DarkModeContextProvider } from './context/darkModeContext.tsx'
import { ThemeColorContextProvider } from './context/themeColorContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <ThemeColorContextProvider>
        <App />
      </ThemeColorContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
)
