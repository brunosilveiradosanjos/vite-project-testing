import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import userEvent from '@testing-library/user-event'
import { routesConfig } from '@/components/router/RoutesConfig'
import { AppWithRoutes } from '@/components/router/AppWithRoutes'

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

vi.mock('@/components/router/routes/Posts', () => ({
  Posts: () => <div data-testid="PostsMock" />,
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

describe('Navbar navigation tests', () => {
  it('should show home component on home click', async () => {
    render(<AppWithRoutes />)
    const user = userEvent.setup()
    const homeButton = screen.getByText('Home')

    await user.click(homeButton)

    const home = screen.getByTestId('HomeMock')
    expect(home).toBeInTheDocument()
  })
  it('should show about component on about click', async () => {
    render(<AppWithRoutes />)
    const user = userEvent.setup()
    const aboutButton = screen.getByText('About')

    await user.click(aboutButton)

    const about = screen.getByTestId('AboutMock')
    expect(about).toBeInTheDocument()
  })
  it('should show posts component on posts click', async () => {
    render(<AppWithRoutes />)
    const user = userEvent.setup()
    const postsButton = screen.getByText('Posts')

    await user.click(postsButton)

    const posts = screen.getByTestId('PostsMock')
    expect(posts).toBeInTheDocument()
  })
})
