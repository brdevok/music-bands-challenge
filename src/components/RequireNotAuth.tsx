import React from "react";
import { Redirect } from "react-router";

/**
 * This component detect the current session of the client and display the content of the
 * page only if the session is NOT authorized.
 */
const RequireNotAuth:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    const auth = localStorage.getItem("auth");

    return(
        <>
            {(!auth || auth === "false") ? children : <Redirect to="/"/>}
        </>
    );

}

export default RequireNotAuth;