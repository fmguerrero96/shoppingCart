export default function Cart({onCartToggle, isOpen}) {
    return(
        <div className={`cart ${isOpen ? 'isOpen' : ''}`}>
            <div className="cartHeader">
                <h2>
                    Your Cart
                </h2>
                <div onClick={onCartToggle} className="xButton">X</div>
            </div>

            <div className="cartItems">

            </div>
            
            <button className="checkout">Checkout</button>
        </div>
    )
}