import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import Error from './pages/Error'

import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: []
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
