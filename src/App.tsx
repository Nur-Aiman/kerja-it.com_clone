import './App.css'
import Home from './pages/Home'
import Job from './pages/Job'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: 'kerja-it.com_clone/',
      element: <Home />,
    },
    {
      path: 'kerja-it.com_clone/job/:id',
      element: <Job />,
    },
  ])
  return <RouterProvider router={router} />
}

export default App
