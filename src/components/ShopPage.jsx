import ProductCards from "./ProductCards"
import NavBar from "./navBar"

export default function ShopPage({isOpen, onCartToggle, products}) {
    
    return(
        <div className="shopPage">
            <NavBar isOpen={isOpen} onCartToggle={onCartToggle}/>
            <h2>Shop</h2>
            <ProductCards products={products}/>
        </div>
    )
}