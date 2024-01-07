import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/session',
    element: <App />,
    children: [{ path: '', element: <HomePage /> }],
  },
])

export default router
