import { useState } from 'react'

import mailIcon from './assets/mail.svg'
import lockIcon from './assets/lock.svg'
import unlockIcon from './assets/unlock.svg'

import logo from '/logo.png'

import './App.css'

const App = () => {
  const [isVisible, setVisible] = useState<boolean>(false)

  const inputText = (label: string, name: string, icon: string) => {
    return (
      <div className="flex flex-col items-start">
        <label htmlFor="email">{label}</label>

        <div className="flex bg-slate-900 justify-between w-full">
          <input
            type="text"
            id={name}
            name={name}
            placeholder={label}
            className="w-full focus:outline-none px-2 text-sm"
          />
          <div className="bg-green-500 rounded p-2">
            <img src={icon} className="w-8 h-8 !fill-slate-50 !stroke-slate-50 !text-slate-50" />
          </div>
        </div>
      </div>
    )
  }

  const inputPassword = (label: string, name: string) => {
    return (
      <div className="flex flex-col items-start">
        <label htmlFor="email">{label}</label>

        <div className="flex bg-slate-900 justify-between w-full">
          <input
            type={isVisible ? 'text' : 'password'}
            id={name}
            name={name}
            placeholder={label}
            className="w-full focus:outline-none px-2 text-sm"
          />
          <div className="bg-green-500 rounded p-2" onClick={(_) => setVisible(!isVisible)}>
            <img
              src={isVisible ? unlockIcon : lockIcon}
              className="w-8 h-8 !fill-slate-50 !stroke-slate-50 !text-slate-50"
            />
          </div>
        </div>
      </div>
    )
  }

  const separator = (text: string) => {
    return (
      <div className="flex w-full justify-between items-center">
        <hr className="w-2/5" />
        <span>{text}</span>
        <hr className="w-2/5" />
      </div>
    )
  }

  const header = (
    <div className="flex flex-col">
      <img src={logo} className="h-16 pb-4" />
      <span className="text-xl font-bold">I.E. 1258 Sebasti&aacute;n Lorente</span>
      <span className="text-md">Portal de docentes</span>
    </div>
  )

  const form = (
    <form className="flex flex-col py-8">
      {inputText('Correo electrónico', 'email', mailIcon)}
      {inputPassword('Contraseña', 'password')}

      <div className="flex justify-end py-4">
        <a href="#" className="underline text-sm">
          ¿Olvidó su contrase&ntilde;a?
        </a>
      </div>

      <button className="bg-green-500 border-2 border-green-500 rounded-md h-10 font-bold">
        Ingresar
      </button>

      {separator('ó')}

      <button className="border-2 border-green-500 text-green-500 rounded-md h-10 font-bold">
        Registrarse
      </button>
    </form>
  )

  return (
    <div className="flex h-screen">
      <div className="w-full flex justify-center items-center">
        <div className="w-10/12">
          {header}
          {form}
        </div>
      </div>
    </div>
  )
}

export default App
