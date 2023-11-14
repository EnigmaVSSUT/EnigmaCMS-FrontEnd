import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import EnigmaTheme from './theme/EnigmaTheme'
import ErrorBoundary from "./errors/ErrorBoundary";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<EnigmaTheme>
	<ErrorBoundary>
	<App />
	</ErrorBoundary>
	</EnigmaTheme>
  </React.StrictMode>,
)
