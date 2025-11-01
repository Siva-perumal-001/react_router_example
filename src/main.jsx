import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import './index.css'
import App from './Components/App.jsx'
import Home from './Components/Home'
import Error from './Components/Error'

const router = new createBrowserRouter([
  {
    path : '/',
    element : <Home />,
    errorElement : <Error/>
  },
  {
    path : '/app',
    element : <App />,
    errorElement : <Error/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
