import styled from "@emotion/styled";
import { AppBar, Box, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { Usericon } from "./Usericon";


const StyledAppBar=styled(AppBar)(()=>({
    background:"#fff",
    color:"#103866",
    width:"100%",
    padding:"0 100px 0px 30px",
    display:"flex",
}));

const StyledToolBar=styled(Toolbar)(()=>({
    display:"flex",
    width:"100%",
    justifyContent:"space-between",
    
}));


export const Header=()=>{
return(
    <Box>
        <StyledAppBar>
           <StyledToolBar>
            <Link to="/">Home</Link>
            <SearchBar/>
            <Usericon/>
            </StyledToolBar>
            </StyledAppBar>
    </Box>
)
};