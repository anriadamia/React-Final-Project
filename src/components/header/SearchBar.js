import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { queryProducts, useSearchResults } from "../../redux";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchResults = useSearchResults();
  const dispatch = useDispatch();

  useEffect(() => {

    const timerId = setTimeout(() => {
      dispatch(queryProducts(searchQuery));
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery]);
  return (
    <Autocomplete
      freeSolo
      sx={{ width: 300 }}
      disableClearable
      options={searchResults}
      getOptionLabel={(option) => option.name}
      renderOption={(_, option) => {
        const { name, category, _id, price,image } = option;
        return (
          <Link to="" key={_id} style={{ textDecoration: 'none', color:"black"}}>
            <Box textAlign={"center"}>
              <Typography >{name}</Typography>
              <Typography >{price}$</Typography>
              <Typography>
                <img src={image} width="100%"/>
              </Typography>
            </Box>
          </Link>
        );
      }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            label="Search Products"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        );
      }}
    />
  );
};
