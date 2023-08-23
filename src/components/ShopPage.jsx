import NavBar from "./NavBar.jsx/"
import ProductCards from "./ProductCards"

export default function ShopPage({navBar}) {
    
    return(
        <div className="shopPage">
            {navBar}
            <h2>Shop</h2>
            <ProductCards/>
        </div>
    )
}