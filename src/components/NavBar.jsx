import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
    <>
        <h1>
            FakeFashion
        </h1>
        <div className="pageLinks">
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
        </div>
        <div>Cart</div>
    </>
    )
}