import CartItem from "./CartItem";

export default function Cart({onCartToggle, isOpen, cart, onQuantityChange}) {
    return(
        <div className={`cart ${isOpen ? 'isOpen' : ''}`}>
            <div className="cartHeader">
                <h2 className="cartTitle">
                    Your Cart
                </h2>
                <div onClick={onCartToggle} className="xButton">X</div>
            </div>
            <CartItem onQuantityChange={onQuantityChange} cart={cart}/>
            <div className="total">Total: $666.00</div>
            <button className="checkout">Checkout</button>
        </div>
    )
}