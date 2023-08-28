export default function CartItem({cart}) {
    return (
        <div className="cartItems">
            {
                cart.length > 0  ? (
                    cart.map((item) => (
                        <div className="cartProduct" key={item.id}>
                            <div className="imagePrice">
                                <img className="itemImage" src={item.image} alt={item.description}></img>
                                <div>${item.price} each</div>
                            </div>
                            
                            <div className="amountControl">
                                <button className="subtract">-</button>
                                <div className="amount">0</div>
                                <button className="add">+</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <h2>Cart is empty</h2>
                )
            }
        </div>
    )
}