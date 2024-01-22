import Drawer from '../Drawer'

const Menu = () => {
  return (
    <div className="w-full flex justify-between px-6 pt-6 pb-4">
      <div className="flex items-center">
        <span>Minty</span>
      </div>

      <div className="flex items-center gap-4">
        <span>Hola, Fernando</span>
        <Drawer />
      </div>
    </div>
  )
}

export default Menu
