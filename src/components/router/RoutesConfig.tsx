import { Outlet, type RouteObject } from 'react-router'
import NavBar from './routes/Navbar'
import { Home } from './routes/Home'
import { About } from './routes/About'
import { Posts } from './routes/Posts'
import { Post } from './routes/Post'
import { PageNotFound } from './routes/PageNotFound'

export const routesConfig: RouteObject[] = [
  {
    element: (
      <>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/posts',
        element: <Posts />,
      },
      {
        path: '/post/:id',
        element: <Post />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]
