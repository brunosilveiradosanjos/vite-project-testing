import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { TextEncoder } from 'util'
import { AppWithRoutes } from '@/components/router/AppWithRoutes'

global.TextEncoder = TextEncoder

vi.mock('@/components/router/routes/Home', () => ({
  Home: () => <div data-testid="HomeMock" />,
}))

vi.mock('@/components/router/routes/About', () => ({
  About: () => <div data-testid="AboutMock" />,
}))

describe('App with routes test suite', () => {
  it('should always load the navbar', () => {
    render(<AppWithRoutes />)
    const navbar = screen.getByTestId('NavBar')

    expect(navbar).toBeInTheDocument()
  })

  it.skip('Should initially load the home component', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <AppWithRoutes />
      </MemoryRouter>
    )
    const about = screen.getByTestId('AboutMock')

    expect(about).toBeInTheDocument()
  })
})
