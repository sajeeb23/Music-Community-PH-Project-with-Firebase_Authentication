import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, load } = useContext(AuthContext);

    if (load) {
        return <div className="h-[100vh] flex justify-center items-center">
            <span className="loading loading-dots loading-lg"></span>
        </div>

    }
    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;