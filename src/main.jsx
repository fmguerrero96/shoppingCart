import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './components/HomePage.jsx';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/home",
    element: <HomePage />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
