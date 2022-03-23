import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Collapse from "@mui/material/Collapse";
import Naverapimap from "./naverapimap";
import Container from "@mui/material/Container";
import * as React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
const Maps = () => {

    const searchBox = (
        <TextField id="outlined-search" label="Search field" type="search" sx={{bgcolor:'white', zIndex:'100',}}/>
    );

    // const [searchOpen, setSearchOpen] = React.useState(false);
    // const handleChange = () => {
    //     setSearchOpen((prev) => !prev);
    // };

    return (
            <Box sx={{ mt: 2 , ml: 4 ,mr: 4 }}>
                <Grid container spacing={2}>
                <Grid item xs={8} md={10}>
                    <TextField fullWidth id="outlined-search" label="Search field" size="small" type="search" sx={{bgcolor:'white', mb: 2, mr : 2,}}/>
                </Grid>
                <Grid item xs={4} md={2}>
                    <Button fullWidth variant="contained" endIcon={<SearchIcon />}>
                        검색
                    </Button>
                </Grid>
                </Grid>

                {/*<Grid item xs={12} md={12} lg={12} sx={{position:'absolute'}}>*/}
                {/*    <Collapse in={searchOpen}>*/}
                {/*        {searchBox}*/}
                {/*    </Collapse>*/}
                {/*</Grid>*/}
                <Grid item xs={12} md={12} lg={12}>
                    <Naverapimap />
                    <div className={"map"}></div>
                </Grid>
                {/* Recent Deposits
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >
                                    <Deposits />
                                </Paper>
                            </Grid>
                             Recent Orders
                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Orders />
                                </Paper>
                            </Grid>*/}

            </Box>
    );
};

export default Maps;