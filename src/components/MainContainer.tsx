import { ThemeProvider } from "@emotion/react";
import { Box, Container, CssBaseline } from "@mui/material";
import { indigo } from "@mui/material/colors";
import React from "react";
import theme from "../theme/theme";

const MainContainer:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    return(
        <CssBaseline>

            <ThemeProvider theme={theme}>

                <Box sx={{
                    backgroundColor: indigo[50],
                    minHeight: "100vh",
                    padding: "1rem 0"
                }}>

                    <Container fixed>
                        {children}
                    </Container>

                </Box>

            </ThemeProvider>

        </CssBaseline>
    );

}

export default MainContainer;