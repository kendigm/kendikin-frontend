import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.js'
import { PersistGate } from "redux-persist/integration/react"
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-qfj7cdc7hakzv4wa.uk.auth0.com"
    clientId="kfRAGUqAD0B6W1aVA8RfJMz3uK8ikdIo"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Auth0Provider>,
)
