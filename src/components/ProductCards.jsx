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
            
        </div>
    )
}
