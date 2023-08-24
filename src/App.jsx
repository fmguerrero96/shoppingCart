import { useState } from "react";
import Router from "./components/Router";

function App() {
  return (
    <>
      <Router isOpen={isCartOpen} onCartToggle={handleCartToggle} />
    </>
  )
}

export default App
