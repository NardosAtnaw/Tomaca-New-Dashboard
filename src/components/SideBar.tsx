import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Button } from "@mui/material";
import List from "@mui/material/List";
import Link from "next/link";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#3C2223",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  borderRadius: "0px",
  color: theme.palette.text.secondary,
}));

export default function DasboardLayout() {
  const menuList = [
    {
      href: "/dashboard",
      icon: <DashboardIcon />,
      title: "Dashboard",
    },
    {
      href: "/warehouse/stockList/Accessories",
      icon: <InventoryIcon />,
      title: "Inventory",
    },
    {
      href: "/dashboard/order",
      icon: <BookmarkBorderIcon />,
      title: "Orders",
    },

    {
      href: "/gift",
      icon: <CardGiftcardIcon />,
      title: "Gift",
    },
  ];
  const menuList2 = [
    {
      href: "/dashboard",
      icon: <AdminPanelSettingsIcon />,
      title: "Add User",
    },
  ];
  return (
    <Box sx={{}}>
      <Drawer
        sx={{
          border: "none",
        }}
        variant="permanent"
        anchor="left"
      >
        <ImageList
          sx={{
            // position: 'fixed',
            background: "#3C2223",
          }}
        >
          <ImageListItem className="w-[3rem] h-[3rem] object-cover ml-20 mb-5 mt-5">
            <img src="/assets/images/logowh.svg" alt="" />
          </ImageListItem>
        </ImageList>
        <List style={{ color: "#3C2223", marginTop: "20px" }}>
          {menuList.map((e, i) => (
            <ListItem key={i} disablePadding>
              <Button
                href={e.href}
                startIcon={e.icon}
                style={{
                  color: "#3C2223",
                  gap: "10px",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                {e.title}
              </Button>
            </ListItem>
          ))}
        </List>

        <Accordion
          style={{ color: "#3C2223" }}
          className="rounded-md  shadow-none"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Inventory</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List >
              {[
                {
                  text: "Add Inventory",
                  icon: <InventoryIcon />,
                  link: "/dashboard/AddInventory",
                },
                {
                  text: "View Inventory",
                  icon: <AddShoppingCartIcon />,
                  link: "/dashboard/ViewInventory",
                },
                {
                  text: "Add Memebership Inventory",
                  icon: <InventoryIcon />,
                  link: "/dashboard/AddInventory",
                },
                {
                  text: "View Memebership Inventory",
                  icon: <AddShoppingCartIcon />,
                  link: "/view-inventory",
                },
              ].map((item, index) => (
                <ListItem key={item.text} disablePadding>
                  <Link href={item.link}>
                    <ListItemButton>
                      <ListItemIcon style={{ color: "#3C2223" }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText  primary={item.text} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{ color: "#3C2223" }}
          className="rounded-md shadow-none"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Location</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List style={{ color: "#3C2223" }}>
              <ListItem key="add-location" disablePadding>
                <a href="/dashboard/AddLocation">
                  <ListItemButton>
                    <ListItemIcon style={{ color: "#3C2223" }}>
                      <AddLocationAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Location" />
                  </ListItemButton>
                </a>
              </ListItem>
              <ListItem key="location-list" disablePadding>
                <a href="/dashboard/LocationList">
                  <ListItemButton>
                    <ListItemIcon style={{ color: "#3C2223" }}>
                      <EditLocationIcon />
                    </ListItemIcon>
                    <ListItemText primary="Location List" />
                  </ListItemButton>
                </a>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <List style={{ color: "#3C2223", marginTop: "20px" }}>
          {menuList2.map((e, i) => (
            <ListItem key={i} disablePadding>
              <Divider />
              <Button
                href={e.href}
                startIcon={e.icon}
                style={{
                  color: "#3C2223",
                  gap: "10px",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                {e.title}
              </Button>
            </ListItem>
          ))}
          {/* {["Users Info", "Admin"].map((text, index) => (
                
              ))} */}
        </List>
      </Drawer>
    </Box>
  );
}
