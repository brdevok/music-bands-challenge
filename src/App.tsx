import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { blueGrey, indigo, pink } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom";
import Router from "./routes/Router";
import theme from "./theme/theme";

const App:React.FC = ():JSX.Element => {

    return(
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <Box sx={{
                    backgroundColor: indigo[50],
                    minHeight: "100vh",
                    padding: "1rem"
                }}>
                    <Router/>
                </Box>
            </ThemeProvider>
        </CssBaseline>
    );

}

ReactDOM.render(<App/>, document.getElementById("root"));