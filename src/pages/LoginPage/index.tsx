import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import mailIcon from '../../assets/mail.svg'
import lockIcon from '../../assets/lock.svg'
import unlockIcon from '../../assets/unlock.svg'

import logo from '/logo.png'

interface ILogin {
  email: string
  password: string
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('¡Correo inválido!').required('¡Campo requerido!'),
  password: Yup.string().min(2, '¡Muy corto!').max(50, 'Muy largo!').required('¡Campo requerido!'),
})

const LoginPage = () => {
  const navigate = useNavigate()
  const [isVisible, setVisible] = useState<boolean>(false)
  const formik = useFormik<ILogin>({
    initialValues: { email: '', password: '' },
    validationSchema: LoginSchema,
    onSubmit: (values: ILogin) => {
      console.table(values)
      navigate('/session')
    },
  })

  const InputEmail = (
    <div className="flex flex-col items-start">
      <label htmlFor="email">Correo Electr&oacute;nico</label>

      <div className="flex bg-slate-900 justify-between w-full">
        <input
          type="text"
          id="email"
          name="email"
          placeholder="user@domain.com"
          className="w-full focus:outline-none px-2 text-sm"
          onChange={formik.handleChange}
          value={formik.values.email}
          data-testid="email"
        />
        <div className="bg-green-500 rounded p-2">
          <img src={mailIcon} className="w-8 h-8 !fill-slate-50 !stroke-slate-50 !text-slate-50" />
        </div>
      </div>

      {Boolean(formik.errors.email && formik.touched.email) && (
        <span className="text-xs text-red-500">{formik.errors.email}</span>
      )}
    </div>
  )

  const InputPassword = (
    <div className="flex flex-col items-start">
      <label htmlFor="password">Contrase&ntilde;a</label>

      <div className="flex bg-slate-900 justify-between w-full">
        <input
          type={isVisible ? 'text' : 'password'}
          id="password"
          name="password"
          placeholder="Contraseña"
          className="w-full focus:outline-none px-2 text-sm"
          onChange={formik.handleChange}
          value={formik.values.password}
          data-testid="password"
        />
        <div className="bg-green-500 rounded p-2" onClick={(_) => setVisible(!isVisible)}>
          <img
            src={isVisible ? unlockIcon : lockIcon}
            className="w-8 h-8 !fill-slate-50 !stroke-slate-50 !text-slate-50"
          />
        </div>
      </div>

      {Boolean(formik.errors.password && formik.touched.password) && (
        <span className="text-xs text-red-500">{formik.errors.password}</span>
      )}
    </div>
  )

  const separator = (text: string) => {
    return (
      <div className="flex w-full justify-between items-center py-2">
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
    <form className="flex flex-col py-8" onSubmit={formik.handleSubmit}>
      {InputEmail}
      {InputPassword}

      <div className="flex justify-end py-4">
        <a href="#" className="underline text-sm">
          ¿Olvidó su contrase&ntilde;a?
        </a>
      </div>

      <button
        type="submit"
        className={
          formik.isValid
            ? 'bg-green-500 border-2 border-green-500 rounded-md h-10 font-bold'
            : 'bg-gray-500 border-2 border-gray-500 rounded-md h-10 font-bold'
        }
      >
        Ingresar
      </button>

      {separator('ó')}

      <button
        type="button"
        className="border-2 border-green-500 text-green-500 rounded-md h-10 font-bold"
      >
        Registrarse
      </button>
    </form>
  )

  return (
    <div className="flex h-screen" data-testid="LoginPage">
      <div className="w-full flex justify-center items-center">
        <div className="w-10/12">
          {header}
          {form}
        </div>
      </div>
    </div>
  )
}

export default LoginPage
