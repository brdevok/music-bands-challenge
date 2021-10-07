import { Grid, Typography } from "@mui/material";
import { blueGrey, indigo } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import { Bands } from "../../../types/Bands";
import AlbumIcon from '@mui/icons-material/Album';

const AlbumCard:React.FC<{data:Bands.AlbumType}> = ({data}):JSX.Element => {

    return(
        <Grid item
            xs={12}
            sm={4}
            md={3}
            lg={2}
            xl={2}
        >
            <Box sx={{
                    textAlign: "center",
                    borderRadius: "0.5rem",
                    backgroundColor: "white",
                    color: indigo[900],
                    padding: "2rem 1rem",
                    height: "100%"
                }}
            >
                <AlbumIcon fontSize="large" color="primary"/>
                <Typography fontWeight="bold" mt={1}>{data.name}</Typography>
                <Typography fontWeight="light">{data.year}</Typography>
            </Box>
        </Grid>
    );

}

export default AlbumCard;