import { createBrowserRouter } from 'react-router'
import { RootLayout } from './RootLayout'
import { IndexRoute } from './IndexRoute'
import { DestinationRoute } from './DestinationRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <IndexRoute /> },
      { path: ':itemId', element: <DestinationRoute /> },
    ],
  },
])
