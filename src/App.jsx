import { useState } from "react";
import Router from "./components/Router";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  function handleCartToggle() {
    setIsCartOpen(!isCartOpen)
    console.log(isCartOpen)
  }

  return (
    <>
      <Router isOpen={isCartOpen} onCartToggle={handleCartToggle} />
    </>
  )
}

export default App
