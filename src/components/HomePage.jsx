import NavBar from "./navBar";

export default function HomePage({isOpen, onCartToggle}) {
    return(
        <div className="homePage">
            <NavBar isOpen={isOpen} onCartToggle={onCartToggle}/>
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