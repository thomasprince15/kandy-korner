import { useEffect, useState } from "react"
import { Product } from "./product"
import "./Products.css"

export const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/products`)
                .then(response => response.json())
                .then((productArray) => {
                    setProducts(productArray)
                })
        },
        []
    )

    return <article className="products">
        {
            products.map(product => <Product key={`product--${product.id}`}
                id={product.id}
                name={product.name} />)
        }
    </article>
}