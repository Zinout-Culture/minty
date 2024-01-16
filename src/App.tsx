import { Outlet } from 'react-router'
import { useLocation } from 'react-router'

import Menu from './layouts/Menu'

import './App.css'

const App = () => {
  const location = useLocation()

  const isHome: boolean = location.pathname == '/session'

  return (
    <>
      {isHome && <Menu />}
      <Outlet />
    </>
  )
}

export default App
