import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import UserBar from "./UserBar";

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