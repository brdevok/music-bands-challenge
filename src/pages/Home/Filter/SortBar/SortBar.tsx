import { Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { BandsContext } from "../../../../context/BandsContext";
import SortButtons from "./SortBarOptions/SortButtons";
import SortOptions from "./SortBarOptions/SortOptions";

const SortBar:React.FC = ():JSX.Element => {

    const { sortBands } = useContext(BandsContext);

    const [sortBy, setSortBy] = useState<string>("year");
    const [order, setOrder] = useState<string>("asc");

    const sort = () => sortBands(sortBy, order);

    useEffect(() => sort(), [sortBy, order]);

    return(
        <Stack direction="row" mb={3}>
            
            <SortOptions sortBy={sortBy} setSortBy={setSortBy}/>
            <SortButtons setOrder={setOrder}/>

        </Stack>
    );

}

export default SortBar;