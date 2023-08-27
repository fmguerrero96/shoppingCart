import CartItem from "./CartItem";

export default function Cart({onCartToggle, isOpen, cart}) {
    return(
        <div className={`cart ${isOpen ? 'isOpen' : ''}`}>
            <div className="cartHeader">
                <h2 className="cartTitle">
                    Your Cart
                </h2>
                <div onClick={onCartToggle} className="xButton">X</div>
            </div>
            <CartItem cart={cart}/>
            <button className="checkout">Checkout</button>
        </div>
    )
}