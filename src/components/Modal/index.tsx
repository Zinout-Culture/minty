import { ReactNode } from 'react'

interface Props {
  isOpen: boolean
  children: ReactNode
  onClose: () => void
}

const Modal = (props: Props) => {
  return (
    <div
      onClick={props.onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        props.isOpen ? 'visible bg-black/20' : 'invisible'
      }`}
    >
      <div
        className={`bg-minty-dark rounded-xl shadow p-6 transition-all ${
          props.isOpen ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
        }`}
        onClick={(e: any) => e.stopPropagation()}
      >
        <button
          onClick={props.onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-minty-dark hover:bg-gray-50 hover:text-gray-600"
        >
          <span className="font-bold">X</span>
        </button>
        {props.children}
      </div>
    </div>
  )
}

export default Modal
