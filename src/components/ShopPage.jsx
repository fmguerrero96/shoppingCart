import ProductCards from "./ProductCards"
import NavBar from "./navBar"

export default function ShopPage({isOpen, onCartToggle, products, onAddToCart}) {
    
    return(
        <div className="shopPage">
            <NavBar isOpen={isOpen} onCartToggle={onCartToggle}/>
            <h2>Shop</h2>
            <ProductCards onAddToCart={onAddToCart} products={products}/>
        </div>
    )
}