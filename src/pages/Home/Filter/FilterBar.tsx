import { Box } from "@mui/system";
import React from "react";
import SortBar from "./SortBar/SortBar";

const FilterBar:React.FC = ():JSX.Element => {

    return(
        <Box>
            <SortBar/>
        </Box>
    );

}

export default FilterBar;