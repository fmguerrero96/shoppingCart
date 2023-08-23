import Router from "./components/Router";
import { useState } from "react"

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleCartToggle() {
    setIsCartOpen(!isCartOpen)
    console.log(isCartOpen)
  }

  return (
    <>
      <Router onCartToggle={handleCartToggle} isOpen={isCartOpen} onCartClose={handleCartToggle} />
    </>
  )
}

export default App
