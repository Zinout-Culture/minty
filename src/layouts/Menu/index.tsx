import menuIcon from '../../assets/menu.svg'

const Menu = () => {
  return (
    <div className="w-full flex justify-between px-6 pt-6 pb-4">
      <div className="flex items-center">
        <span>Minty</span>
      </div>

      <div className="flex items-center gap-4">
        <span>Hola, Fernando</span>
        <img src={menuIcon} className="text-white" width={40} height={40} />
      </div>
    </div>
  )
}

export default Menu
