import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { routesConfig } from '@/components/router/RoutesConfig'

vi.mock('@/components/router/routes/Home', () => ({
  Home: () => <div data-testid="HomeMock" />,
}))

vi.mock('@/components/router/routes/About', () => ({
  About: () => <div data-testid="AboutMock" />,
}))

vi.mock('@/components/router/routes/PageNotFound', () => ({
  PageNotFound: () => <div data-testid="PageNotFoundMock" />,
}))

vi.mock('@/components/router/routes/Post', () => ({
  Post: () => <div data-testid="PostMock" />,
}))

describe('Routes config test suite', () => {
  it('should load the home component first', () => {
    const route = '/'
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [route],
    })
    render(<RouterProvider router={router} />)
    const home = screen.getByTestId('HomeMock')
    expect(home).toBeInTheDocument()
  })
  it('Should load the about component on about route', () => {
    const route = '/about'
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [route],
    })
    render(<RouterProvider router={router} />)

    const about = screen.getByTestId('AboutMock')
    expect(about).toBeInTheDocument()
  })

  it('Should load the not found component on invalid route', () => {
    const route = '/notSupported'
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [route],
    })
    render(<RouterProvider router={router} />)

    const pageNotFound = screen.getByTestId('PageNotFoundMock')
    expect(pageNotFound).toBeInTheDocument()
  })

  it('Should load the Post component on post route', () => {
    const route = '/post/2'
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [route],
    })
    render(<RouterProvider router={router} />)

    const post = screen.getByTestId('PostMock')
    expect(post).toBeInTheDocument()
  })
})
