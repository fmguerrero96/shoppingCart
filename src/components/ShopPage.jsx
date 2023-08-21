import NavBar from "./NavBar.jsx/"
import ProductCards from "./ProductCards"

export default function ShopPage() {
    
    return(
        <div className="shopPage">
            <NavBar />
            <h2>Shop</h2>
            <ProductCards/>
        </div>
    )
}