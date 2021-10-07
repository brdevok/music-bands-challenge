import { Button, Grid, Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { Bands } from "../../../types/Bands";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const BandCard:React.FC<{data:Bands.BandType}> = ({data}):JSX.Element => {

    return(
        <Grid item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
        >
            <Box sx={{
                    textAlign: "center",
                    borderRadius: "0.5rem",
                    backgroundColor: "white",
                    color: indigo[900],
                    padding: "2rem 1rem"
                }}
            >
                <MusicNoteIcon fontSize="large" color="primary"/>
                <Typography variant="h5" fontWeight="bold" mb={1} mt={1}>{data.name}</Typography>
                <Typography fontWeight="light">{data.country}</Typography>
                <Typography fontWeight="bold" variant="body2" mb={2} letterSpacing={2}>{data.year}</Typography>
                <Link to={`/band/${data.id}`} style={{textDecoration: "none"}}>
                    <Button variant="outlined" sx={{color: indigo[900]}} size="small">
                        <KeyboardArrowLeftIcon fontSize="small" sx={{marginRight: "0.3rem"}}/>
                        See more
                        <KeyboardArrowRightIcon fontSize="small" sx={{marginLeft: "0.3rem"}}/>
                    </Button>
                </Link>
            </Box>
        </Grid>
    );

}

export default BandCard;