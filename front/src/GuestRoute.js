import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ token }) {

    return token ?  <Navigate to="/" /> : <Outlet />;

}
export default PrivateRoute;