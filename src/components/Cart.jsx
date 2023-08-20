export default function Cart() {
    return(
        <div className="cart">
            <div className="cartHeader">
                <h2>
                    Your Cart
                </h2>
                <div className="xButton">X</div>
            </div>

            <div className="cartItems">

            </div>
            
            <button className="checkout">Checkout</button>
        </div>
    )
}