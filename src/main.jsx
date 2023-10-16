import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import AddCoffee from './Components/AddCoffee.jsx'
import UpdateCoffee from './Components/UpdateCoffee.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import AuthProvider from './Components/AuthProvider.jsx'
import Users from './Components/Users.jsx'
// import UpdateCoffee from './Components/UpdateCoffee.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:7000/coffees')
      },
      {
        path: '/addcoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/updatedcoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`http://localhost:7000/coffees/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: ()=> fetch('http://localhost:7000/users')
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
