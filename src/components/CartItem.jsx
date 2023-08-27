export default function CartItem({cart}) {
    return (
        <div className="cartItems">
            {
                cart.length > 0  ? (
                    cart.map((item) => (
                        <div className="cartProduct">
                            <img className="itemImage" src={item.image} alt={item.description}></img>
                            <span>${item.price} each</span>
                            <button className="subtract">-</button>
                            <div className="amount">0</div>
                            <button className="add">+</button>
                        </div>
                    ))
                ) : (
                    <h2>Cart is empty</h2>
                )
            }
        </div>
    )
}