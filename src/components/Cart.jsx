import CartItem from "./CartItem";

export default function Cart({onCartToggle, isOpen, cart, onQuantityChange, onDeleteItem, total}) {
    return(
        <div data-testid="cart" className={`cart ${isOpen ? 'isOpen' : ''}`}>
            <div className="cartHeader">
                <h2 className="cartTitle">
                    Your Cart
                </h2>
                <div onClick={onCartToggle} className="xButton">x</div>
            </div>
            <CartItem onDeleteItem={onDeleteItem} onQuantityChange={onQuantityChange} cart={cart}/>
            <div className="total">Total: ${total}</div>
            <button className="checkout">Checkout</button>
        </div>
    )
}