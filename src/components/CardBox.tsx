import { Paper } from "@mui/material";
import { indigo } from "@mui/material/colors";
import React from "react";

const CardBox:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    return(
        <Paper elevation={1} sx={{
            textAlign: "center",
            borderRadius: "0.5rem",
            backgroundColor: "white",
            color: indigo[900],
            padding: "2rem 1rem",
            height: "100%"
        }}>
            {children}
        </Paper>
    );

}

export default CardBox;