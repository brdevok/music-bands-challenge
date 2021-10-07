import { Container, Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";
import React, { useContext, useEffect } from "react";
import { BandsContext } from "../../context/BandsContext";
import BandsGrid from "./BandsGrid/BandsGrid";
import FilterBar from "./Filter/FilterBar";

const Home:React.FC = ():JSX.Element => {

    const { bands, fetchBands } = useContext(BandsContext);

    useEffect(() => fetchBands(), []);

    return(
        <Container fixed>
            <Typography variant="h2" fontWeight="bold" color={indigo[900]} mb={3}>Music Bands</Typography>
            <FilterBar/>
            <BandsGrid bands={bands}/>
        </Container>
    );

}

export default Home;