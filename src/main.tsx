import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from './components/theme-provider.tsx'
import { WaterConsumeContextProvider } from './contexts/WaterConsume.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <WaterConsumeContextProvider>
        <App />
        <Analytics />
      </WaterConsumeContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
