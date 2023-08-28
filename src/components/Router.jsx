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
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
        const updatedCart = cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
    } else {
        setCart([...cart, { ...product, quantity: 1 }]);
    }
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