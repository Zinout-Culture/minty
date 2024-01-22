import { useState } from 'react'

import menuIcon from '../../assets/menu.svg'

const Drawer = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)

  return (
    <>
      <button onClick={openDrawer}>
        <img src={menuIcon} className="text-white" width={40} height={40} />
      </button>

      <div
        className={`fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform easi-in-out ${
          isOpen
            ? 'transition-opacity opacity-100 duration-500 translate-x-0'
            : 'transition-all delay-500 opacity-0 translate-x-full'
        }`}
      >
        <div
          className={`w-screen max-w-lg right-0 absolute bg-minty-dark h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform ease-in-out transition-all transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
            <div className="flex justify-between">
              <span className="p-4 font-bold text-lg">Nav</span>
              <button onClick={closeDrawer}>Volver</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Drawer
