import { BrowserRouter as Router } from 'react-router-dom'
// import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import LoginPage from '../pages/LoginPage'

describe('Login Page', () => {
  test('Renderizado', () => {
    render(
      <Router>
        <LoginPage />
      </Router>,
    )

    expect(screen.getByText('Ingresar')).toBeDefined()
  })
})
