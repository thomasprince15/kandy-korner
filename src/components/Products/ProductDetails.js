import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const ProductDetails = () => {
    const { productId } = useParams()
    const [product, updateProduct] = useState()

    useEffect(
        () => {
            fetch(`http://localhost:8088/products?_expand=type&typeId=${productId}`)
                .then(response => response.json())
                .then((data) => {
                    const singleProduct = data[0]
                    updateProduct(singleProduct)
                })
        },
        [productId]
    )

    return <section className="product" >
        <header className="product__header">{product?.name}</header>
        <div>Type: {product?.type?.type}</div>
        <div>Price: {product?.price}</div>
    </section>
}