import { BrowserRouter as Router } from 'react-router-dom'
// import { describe, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import LoginPage from '../pages/LoginPage'

describe('Login Page', () => {
  beforeEach(() => {
    render(
      <Router>
        <LoginPage />
      </Router>,
    )
  })

  test('Título', () => expect(screen.getByText('Portal de docentes')).toBeDefined())

  test('Botón Ingresar', () => {
    expect(screen.getByText('Ingresar')).toBeDefined()

    const emailInput = screen.getByTestId('email') as HTMLInputElement
    const passwordInput = screen.getByTestId('password') as HTMLInputElement
    fireEvent.change(emailInput, { target: { value: 'jhon@doe.com' } })
    fireEvent.change(passwordInput, { target: { value: 'Lima2023.' } })
    fireEvent.click(screen.getByText('Ingresar'))
    expect(emailInput.value).toBe('jhon@doe.com')
    expect(passwordInput.value).toBe('Lima2023.')
    // expect(screen.getByTestId('HomePage')).toBeDefined()
  })

  test('Botón Registrarse', () => expect(screen.getByText('Registrarse')).toBeDefined())
})
