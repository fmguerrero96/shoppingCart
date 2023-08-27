export default function CartItem({cart}) {
    return (
        <div className="cartItems">
            {
                cart.length > 0  ? (
                    cart.map((item) => (
                        <div className="cartProduct">
                            <img src={item.image} alt={item.description}></img>
                            <span>{item.price}</span>
                        </div>
                    ))
                ) : (
                    <h2>Cart is empty</h2>
                )
            }
        </div>
    )
}