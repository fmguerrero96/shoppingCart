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
                        <img src={product.image} alt={product.description}></img>
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                        <button>Add to cart</button>
                    </div>
                ))
            ) : (
                <p>Loading products...</p>
            )}
        </div>
    )
}
