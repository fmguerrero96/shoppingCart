import NavBar from "./NavBar.jsx/"

export default function HomePage() {
    return(
        <div className="homePage">
            <NavBar />
            <div className="homeContent">
                <h1>
                    Welcome to FakeFashion
                </h1>
                <p>
                Discover the latest trends in mock fashion at FakeFashion! 
                Explore our wide range of non-existent clothing, shoes, and accessories. 
                Whether you're looking for the perfect imaginary outfit or simply browsing 
                for inspiration, you're in for a virtual shopping experience like no other.
                </p>
            </div>
        </div>
    )
}