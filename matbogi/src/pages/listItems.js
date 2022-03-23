import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

export const mainListItems = (

    <React.Fragment>
        <Link to="/" style={{ textDecoration: 'none', color :'black' }}>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="Maps"/>
        </ListItemButton>
        </Link>
        {/*<ListItemButton>*/}
        {/*    <ListItemIcon>*/}
        {/*        <ShoppingCartIcon/>*/}
        {/*    </ListItemIcon>*/}
        {/*    <ListItemText primary="Orders"/>*/}
        {/*</ListItemButton>*/}
        <Link to="/Influencer" style={{ textDecoration: 'none', color :'black' }}>
        <ListItemButton>
            <ListItemIcon>
                <PeopleIcon/>
            </ListItemIcon>
            <ListItemText primary="Influencer"/>
        </ListItemButton>
        </Link>
        <ListItemButton>
            <ListItemIcon>
                <BarChartIcon/>
            </ListItemIcon>
            <ListItemText primary="Reports"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LayersIcon/>
            </ListItemIcon>
            <ListItemText primary="Integrations"/>
        </ListItemButton>
    </React.Fragment>

);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            My Information
        </ListSubheader>
        <Link to="/Information" style={{ textDecoration: 'none', color :'black' }}>
            <ListItemButton>
                <ListItemIcon>
                    <AssignmentIcon/>
                </ListItemIcon>
                <ListItemText primary="Information"/>
            </ListItemButton>
        </Link>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Last quarter"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Year-end sale"/>
        </ListItemButton>
    </React.Fragment>
);