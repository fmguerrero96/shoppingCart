import Router from "./components/Router";

function App() {
  return (
    <>
      <Router onCartToggle={handleCartToggle} isOpen={isCartOpen} onCartClose={handleCartToggle} />
    </>
  )
}

export default App
