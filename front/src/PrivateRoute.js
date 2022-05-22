import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ token }) {

    return token ? <Outlet /> : <Navigate to="/login" />;

}
export default PrivateRoute;