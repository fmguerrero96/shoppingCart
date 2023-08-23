import HomePage from "./components/HomePage"
//import Cart from "./components/Cart"
//import NavBar from "./components/navBar"
import { useState } from "react"

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleCartToggle() {
    setIsCartOpen(!isCartOpen)
    console.log(isCartOpen)
  }

  return (
    <>
      <HomePage onCartToggle={handleCartToggle} isOpen={isCartOpen} onCartClose={handleCartToggle} />
    </>
  )
}

export default App
