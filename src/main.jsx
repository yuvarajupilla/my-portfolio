import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// At the very top of main.jsx or index.jsx
if (import.meta.env.DEV) {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    // Filter out specific warnings
    if (
      args[0]?.includes?.('non-static position') ||
      args[0]?.includes?.('non-boolean attribute')
    ) {
      return; // Hide these warnings
    }
    originalWarn(...args);
  };
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
