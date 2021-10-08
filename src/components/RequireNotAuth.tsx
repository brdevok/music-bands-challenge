import React from "react";
import { Redirect } from "react-router";

const RequireNotAuth:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    const auth = localStorage.getItem("auth");

    return(
        <>
            {auth === "false" ? children : <Redirect to="/"/>}
        </>
    );

}

export default RequireNotAuth;