import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import EnigmaTheme from './theme/EnigmaTheme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<EnigmaTheme>
	<App />
	</EnigmaTheme>
  </React.StrictMode>,
)
