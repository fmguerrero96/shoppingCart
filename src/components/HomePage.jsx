//import NavBar from "./NavBar.jsx/"

export default function HomePage({navBar}) {
    return(
        <div className="homePage">
            {navBar}
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