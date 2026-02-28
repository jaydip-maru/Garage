import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CookiesProvider } from 'react-cookie';
import { AuthProvider } from './Providers/AuthContext.jsx';
import Navbar from './Navbar.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
    <AuthProvider>
    <App />
    </AuthProvider>
    </CookiesProvider>
  </StrictMode>,
)
