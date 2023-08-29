import NavBar from "./navBar";

export default function HomePage({isOpen, onCartToggle, cart, onQuantityChange, onDeleteItem}) {
    return(
        <div className="homePage">
            <NavBar onDeleteItem={onDeleteItem} onQuantityChange={onQuantityChange} cart={cart} isOpen={isOpen} onCartToggle={onCartToggle}/>
            <div className="homeContent">
                <h1 className="welcome">
                    Welcome to <span>FakeFashion</span>
                </h1>
                <p className="description">
                Discover the latest trends in mock fashion at FakeFashion! 
                Explore our wide range of non-existent clothing, shoes, and accessories. 
                
                </p>
            </div>
        </div>
    )
}