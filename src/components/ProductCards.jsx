export default function ProductCards({products, onAddToCart}) {
    
    return(
        <div className="productsContainer">
            {products ? (
                products.map((product) =>(
                    <div data-testid='productCard' className="productCard" key={product.id}>
                        <img className="cardImage" src={product.image} alt={product.description}></img>
                        <div className="productInfo">
                            <p className="productTitle">{product.title}</p>
                            <p className="price">${product.price}</p>
                            <button className="addToCart" onClick={() => onAddToCart(product)}>Add to cart</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading products...</p>
            )}
        </div>
    )
}
