import { Outlet, Route, Routes } from "react-router-dom"
import { LocationsList } from "../Locations/LocationList"



export const CustomerViews = () => {
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
                
            </Route>
        </Routes>
    )
}