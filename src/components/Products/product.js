import { Link } from "react-router-dom"

export const Product = ({ id, name }) => {
    return <section className="product" >
        <div>
            <Link to={`/products/${id}`}>Name: {name}</Link>
        </div>
    </section>
}