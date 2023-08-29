export default function CartItem({cart, onQuantityChange, onDeleteItem}) {
    return (
        <div className="cartItems">
            {
                cart.length > 0  ? (
                    cart.map((item) => (
                        <div className="cartProduct" key={item.id}>
                            <div className="imagePrice">
                                <img className="itemImage" src={item.image} alt={item.description}></img>
                                <div className="each">${item.price} each</div>
                            </div>
                            
                            <div className="amountControl">
                                <button onClick={() => {onQuantityChange('subtract', item); onDeleteItem(item);}} className="subtract">-</button>
                                <div className="amount">{item.quantity}</div>
                                <button onClick={() => onQuantityChange('add', item)} className="add">+</button>
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