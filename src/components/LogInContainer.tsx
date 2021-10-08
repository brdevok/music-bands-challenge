import React from "react";
import { indigo } from "@mui/material/colors";
import { Paper, Stack } from "@mui/material";

/**
 * Container for the log in page form.
 */
const LogInContainer:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    return(
        <Paper elevation={2} sx={{
            backgroundColor: "white",
            borderRadius: "0.5rem",
            width: "95%",
            maxWidth: "400px",
            padding: "2rem 3rem",
            color: indigo[900],
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }}>
            <form>
                <Stack alignItems="center">
                    {children}
                </Stack>
            </form>
        </Paper>
    );

}

export default LogInContainer;