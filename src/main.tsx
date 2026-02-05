import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import { PrayerModalProvider } from './components/PrayerModal.tsx'
import { ThemeProvider } from './components/theme-provider'
import './index.css'

import { NovenaProvider } from './hooks/useNovenaProgress'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider defaultTheme="system" storageKey="novena-theme">
        <NovenaProvider>
          <PrayerModalProvider>
            <App />
          </PrayerModalProvider>
        </NovenaProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
)
