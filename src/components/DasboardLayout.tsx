import React, {ReactNode} from 'react'
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
//Icons
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import PeopleIcon from "@mui/icons-material/People";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import EditLocationIcon from "@mui/icons-material/EditLocation";
//Accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppBar from '../components/AppBar';
import SideBar from '../components/SideBar'
import {Grid} from '@mui/material';


interface Props {
    children?: ReactNode
    // any props that come into the component
}

const DasboardLayout =({children}:Props)=>{
  return (
    <>
        <Grid container>
            <Grid item xl={2}>
                    <SideBar/>
            </Grid>
            <Grid item xl={10} >
                <Box>
                    <AppBar/>
                    <Box className="m-5"> {children}</Box>
                   
                </Box>
            </Grid>
        </Grid>
    </>
  );
}

export default DasboardLayout
