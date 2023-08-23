import { useState, useEffect } from "react";

export default function ProductCards() {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(res=>setProducts(res))        
    }, [])

    return(
        <div className="productsContainer">
            {products ? (
                products.map((product) =>(
                    <div className="productCard" key={product.id}>
                        <img className="cardImage" src={product.image} alt={product.description}></img>
                        <div className="productInfo">
                            <p className="productTitle">{product.title}</p>
                            <p className="price">${product.price}</p>
                            <button className="addToCart">Add to cart</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading products...</p>
            )}
        </div>
    )
}
