import { Stack, Typography, TypographyVariant, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Bands } from "../../../types/Bands";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FlagIcon from '@mui/icons-material/Flag';
import { indigo } from "@mui/material/colors";
import theme from "../../../theme/theme";

/**
 * Displays basic info of a specific band, like year, title, genre and location.
 */
const BandInfo:React.FC<{data:Bands.BandType|undefined, genre:Bands.GenreType|undefined}> = ({data, genre}) => {


    return(
        <Stack mt={3} mb={3} sx={{
            color: indigo[900]
        }}>

            <Typography fontWeight="light" letterSpacing={4}>{data?.year}</Typography>

            <Typography variant="h3" fontWeight="bold" mb={1}>{data?.name}</Typography>

            <Typography variant="h4" fontWeight="light">
                <LibraryMusicIcon color="primary" sx={{marginRight: "0.5rem"}}/> 
                {genre?.name}
            </Typography>

            <Typography variant="h6" fontWeight="light">
                <FlagIcon color="primary" sx={{marginRight: "0.5rem"}}/> 
                {data?.country}
            </Typography>

        </Stack>
    );

}

export default BandInfo;