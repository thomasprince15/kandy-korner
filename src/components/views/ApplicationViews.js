import { CustomerViews } from "./CustomerViews"
import { EmployeeViews } from "./EmployeeViews"

export const ApplicationViews = () => {

    const localKandyUser = localStorage.getItem("kandy_user")
    const honeyKandyObject = JSON.parse(localKandyUser)

    if (honeyKandyObject.staff) {
        //return employee views
        return <EmployeeViews />
    }
    else {
        //return customer views
        return <CustomerViews />
    }

}
