import { render, screen } from '@testing-library/react'
import { Task } from './index'
import Providers from './../../utils/test-utils'
import userEvent from '@testing-library/user-event'
import { AuthContext } from '../../contexts/auth'

test.skip('Testing screen Task', () => {
  render(
    <Providers>
      <AuthContext.Provider
        value={{
          isAuthenticated: true,
          user: {
            token: 'wjhqwejk',
            expireIn: 'sdfjhsdf',
            email: 'user@user.com',
            name: 'user',
            role: 'administrador'
          },
          Login: jest.fn(),
          Logout: jest.fn()
        }}>
        <Task />
      </AuthContext.Provider>
    </Providers>
  )

  expect(screen.getByTestId('cardEquipament')).toBeInTheDocument()
  const buttonEquipament = screen.getByTestId('buttonEquipaments')
  userEvent.click(buttonEquipament)

  expect(screen.getByTestId('cardOrderService')).toBeInTheDocument()
  const buttonOrderService = screen.getByTestId('buttonOrderService')
  userEvent.click(buttonOrderService)

  expect(screen.getByTestId('cardUsers')).toBeInTheDocument()
  const buttonUsers = screen.getByTestId('buttonUsers')
  userEvent.click(buttonUsers)
})
