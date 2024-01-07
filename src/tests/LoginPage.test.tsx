import { BrowserRouter as Router } from 'react-router-dom'
// import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import LoginPage from '../pages/LoginPage'

describe('Login Page', () => {
  beforeEach(() => {
    render(
      <Router>
        <LoginPage />
      </Router>,
    )
  })

  test('Título', () => {
    expect(screen.getByText('Portal de docentes')).toBeDefined()
  })

  test('Botón Ingresar', () => {
    expect(screen.getByText('Ingresar')).toBeDefined()
  })

  test('Botón Registrarse', () => {
    expect(screen.getByText('Registrarse')).toBeDefined()
  })
})
