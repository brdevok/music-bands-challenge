import React from "react";
import { indigo } from "@mui/material/colors";
import { Box } from "@mui/system";
import { Paper, Stack } from "@mui/material";

/**
 * Container for the log in page form.
 */
const LogInContainer:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    return(
        <Box sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Paper elevation={2} sx={{
                margin: "auto",
                backgroundColor: "white",
                borderRadius: "0.5rem",
                width: "100%",
                maxWidth: "400px",
                padding: "2rem 3rem",
                color: indigo[900]
            }}>
                <form>
                    <Stack alignItems="center">
                        {children}
                    </Stack>
                </form>
            </Paper>
        </Box>
    );

}

export default LogInContainer;