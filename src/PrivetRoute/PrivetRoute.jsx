import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location= useLocation();
         
  if (loading) {
    return <p className="flex justify-center items-center h-[50vh]">
        <span className="loading loading-dots  loading-lg"></span>
    </p>
  }
  console.log('this is location',location);

 if (user && !loading) {
    return  children
 }


    return  <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivetRoute;