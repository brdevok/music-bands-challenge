import React from "react";
import { Redirect } from "react-router";

const RequireAuth:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    const auth = localStorage.getItem("auth");

    return(
        <>
            {auth === "true" ? children : <Redirect to="/login"/>}
        </>
    );

}

export default RequireAuth;