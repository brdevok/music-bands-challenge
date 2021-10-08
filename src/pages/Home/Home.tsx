import { Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";
import React, { useContext, useEffect } from "react";
import InnerPageContainer from "../../components/InnerPageContainer";
import { BandsContext } from "../../context/BandsContext";
import BandsGrid from "./BandsGrid/BandsGrid";
import SortBar from "./SortBar/SortBar";

/**
 * Home page for authorized users, display a grid of cards containing bands data and sort options.
 */
const Home:React.FC = ():JSX.Element => {

    const { bands, fetchBands } = useContext(BandsContext);

    useEffect(() => fetchBands(), []);

    return(
        <InnerPageContainer>
            
            <Typography variant="h2" fontWeight="bold" color={indigo[900]} mb={3}>Music Bands</Typography>
            
            <SortBar/>
            
            <BandsGrid bands={bands}/>

        </InnerPageContainer>
    );

}

export default Home;