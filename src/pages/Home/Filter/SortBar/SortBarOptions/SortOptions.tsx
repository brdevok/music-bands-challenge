import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { Dispatch } from "react";

const SortOptions:React.FC<{sortBy:string, setSortBy:Dispatch<string>}> = ({sortBy, setSortBy}):JSX.Element => {

    const handleChange = (e:SelectChangeEvent) => {

        setSortBy(e.target.value);

    }

    return(
        <FormControl sx={{
            marginRight: "1rem"
        }}>
            <InputLabel id="sortByLabel">Sort by</InputLabel>
            <Select
                labelId="sortByLabel"
                id="sortBy"
                value={sortBy}
                label="Sort by"
                size="small"
                color="primary"
                onChange={handleChange}
                sx={{
                    width: "150px"
                }}
            >
                <MenuItem value="year">Year</MenuItem>
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="country">Country</MenuItem>
            </Select>
        </FormControl>
    );

} 

export default SortOptions;