

import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './routes/store.jsx'
import AppRoutes from '../src/routes/AppRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRoutes/>
  </Provider>
)
