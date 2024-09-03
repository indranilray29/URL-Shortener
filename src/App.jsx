import React from 'react'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import Redirect_link from './pages/Redirect_link'
import Links from './pages/Links'

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/auth',
        element: <Auth />
      },
      {
        path: '/link/:id',
        element: <Links />
      },
      {
        path: '/:id',
        element: <Redirect_link />
      },
    ]
  }
])

function App() {
  
  return (

      <RouterProvider router={ router } />
    
  )
}

export default App
