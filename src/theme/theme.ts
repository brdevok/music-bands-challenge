import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            light: blue[400],
            main: blue[500],
            dark: blue[600]
        }
    }
});

export default theme;