import { Route,Switch } from "react-router-dom";
import Home from "../Pages/Home"
import EmployDetailsList from "../Components/EmployDetailsList";
import AdminPage from "../Components/AdminPage"
export default function AllRoute(){
    return (
        <>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/user">
                < EmployDetailsList/>
            </Route>
            <Route exact path="/admin">
                <AdminPage />
            </Route>
        </Switch>
        </>
    )
}