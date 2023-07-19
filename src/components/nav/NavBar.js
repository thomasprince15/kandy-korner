import { CustomerNav } from "./CustomerNav"
import { EmployeeNav } from "./EmployeeNav"
import "./NavBar.css"

export const NavBar = () => {

    const localKandyUser = localStorage.getItem("kandy_user")
    const honeyKandyObject = JSON.parse(localKandyUser)

    if (honeyKandyObject.staff) {
        //return employee views
        return <EmployeeNav />
    }
    else {
        //return customer views
        return <CustomerNav />
    }

}