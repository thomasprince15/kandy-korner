import { Outlet, Route, Routes } from "react-router-dom"
import { LocationsList } from "../Locations/LocationList"
import { ProductList } from "../Products/ProductList"
import { ProductDetails } from "../Products/ProductDetails"


export const EmployeeViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>
                    <div>Sweetest kandy on the block</div>
                    <Outlet />
                </>
            }>
                <Route path="locations" element={ <LocationsList /> } />
                <Route path="products" element={ <ProductList /> } />
                <Route path="product/:productId" element={ <ProductDetails/> } />
            </Route>
        </Routes>
    )
}