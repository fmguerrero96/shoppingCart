import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./ShopPage.jsx";
import ErrorPage from "./ErrorPage.jsx"
import HomePage from "./HomePage.jsx";
import { useState } from "react";

export default function Router() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  function handleCartToggle() {
    setIsCartOpen(!isCartOpen)
    console.log(isCartOpen)
  }
    const router = createBrowserRouter ([
        {
          path: "/",
          element: <HomePage isOpen={isCartOpen} onCartToggle={handleCartToggle}/>,
          errorElement: <ErrorPage />,
        },
        {
          path: '/shop',
          element: <ShopPage isOpen={isCartOpen} onCartToggle={handleCartToggle}/>
        },
      ])

    return <RouterProvider router={router} />;
}