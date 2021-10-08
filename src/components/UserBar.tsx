import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

/**
 * The user bar contains a log out button and is placed at the top of the page.
 */
const UserBar:React.FC = () => {

    return(
        <Stack direction="row-reverse">

            <Link to="/logout" style={{textDecoration: "none"}}>
                <Button variant="text" startIcon={<LogoutIcon/>}>
                    Log Out
                </Button>
            </Link>

        </Stack>
    );

}

export default UserBar;