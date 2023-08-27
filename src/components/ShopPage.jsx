import ProductCards from "./ProductCards"
import NavBar from "./navBar"

export default function ShopPage({isOpen, onCartToggle, products, onAddToCart, cart}) {
    
    return(
        <div className="shopPage">
            <NavBar cart={cart} isOpen={isOpen} onCartToggle={onCartToggle}/>
            <h2>Shop</h2>
            <ProductCards onAddToCart={onAddToCart} products={products}/>
        </div>
    )
}