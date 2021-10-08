import { Grid, Typography } from "@mui/material";
import React from "react";
import { Bands } from "../../../types/Bands";
import AlbumIcon from '@mui/icons-material/Album';
import CardBox from "../../../components/CardBox";

/**
 * Card for albums grid. Display information about an album provided by props.
 */
const AlbumCard:React.FC<{data:Bands.AlbumType}> = ({data}):JSX.Element => {

    return(
        <Grid item
            xs={12}
            sm={4}
            md={3}
            lg={2}
            xl={2}
        >
            <CardBox>

                <AlbumIcon fontSize="large" color="primary"/>

                <Typography fontWeight="bold" mt={1}>{data.name}</Typography>

                <Typography fontWeight="light">{data.year}</Typography>

            </CardBox>
        </Grid>
    );

}

export default AlbumCard;