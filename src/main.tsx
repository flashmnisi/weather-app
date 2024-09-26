
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Layout from './components/Layout.tsx'

const RouterLayout = ()=> {
  return (
    <Layout>
     <Outlet/>
    </Layout>
  )
 
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout/>,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)