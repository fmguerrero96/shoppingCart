import { Link } from 'react-router-dom'
import Cart from './Cart'

export default function NavBar({isOpen, onCartToggle}) {
    return (
    <div className='navBar'>
        <h1 className='navTitle'>
            FakeFashion
        </h1>
        <div className="pageLinks">
            <Link style={{ textDecoration: 'none', color: 'white' }} className='homeLink' to='/'>Home</Link>
            <Link style={{ textDecoration: 'none', color: 'white' }} className='shopLink' to='/shop'>Shop</Link>
        </div>
        <div className='cartIcon' onClick={onCartToggle}>Cart</div>
        {isOpen && <Cart onCartToggle={onCartToggle}/>} 
    </div>
    )
}