import NavBar from "./NavBar.jsx/"

export default function HomePage() {
    return(
        <div className="homePage">
            <NavBar />
            <div className="homeContent">
                <h1 className="welcome">
                    Welcome to FakeFashion
                </h1>
                <p className="description">
                Discover the latest trends in mock fashion at FakeFashion! 
                Explore our wide range of non-existent clothing, shoes, and accessories. 
                
                </p>
            </div>
        </div>
    )
}