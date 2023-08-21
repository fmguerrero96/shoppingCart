import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
    <div className='navBar'>
        <h1 className='navTitle'>
            FakeFashion
        </h1>
        <div className="pageLinks">
            <Link className='homeLink' to='/'>Home</Link>
            <Link className='shopLink' to='/shop'>Shop</Link>
        </div>
        <div className='cartIcon'>Cart</div>
    </div>
    )
}