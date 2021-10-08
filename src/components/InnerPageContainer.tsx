import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import UserBar from "./UserBar";

/**
 * Container for all the inner pages of the site that require an autorized session.
 * Contains the user bar.
 */
const InnerPageContainer:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    return(
        <Box>
            <UserBar/>
            <Box>
                {children}
            </Box>
        </Box>
    );

}

export default InnerPageContainer;