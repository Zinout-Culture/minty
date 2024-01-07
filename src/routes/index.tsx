import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'home', element: <HomePage /> },
    ],
  },
])

export default router
