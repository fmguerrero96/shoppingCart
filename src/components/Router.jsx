import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./ShopPage.jsx";
import ErrorPage from "./ErrorPage.jsx"
import HomePage from "./HomePage.jsx";
import { useState, useEffect } from "react";

export default function Router() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [products, setProducts] = useState(null)
  const [cart, setCart] = useState([])

  function handleCartToggle() {
    setIsCartOpen(!isCartOpen)
  }

  function handleAddToCart(product) {
    setCart(prevCart => [...prevCart, product])
    console.log(product)
  }

  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(res=>setProducts(res))        
  }, [])

    const router = createBrowserRouter ([
        {
          path: "/",
          element: <HomePage cart={cart} isOpen={isCartOpen} onCartToggle={handleCartToggle}/>,
          errorElement: <ErrorPage />,
        },
        {
          path: '/shop',
          element: <ShopPage cart={cart} onAddToCart={handleAddToCart} products={products} isOpen={isCartOpen} onCartToggle={handleCartToggle}/>
        },
      ])

    return <RouterProvider router={router} />;
}