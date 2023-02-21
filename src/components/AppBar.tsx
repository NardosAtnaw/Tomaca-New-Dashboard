import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogoutIcon from '@mui/icons-material/Logout';

const AppBar = () => {
  return (
    <Box    >
      <Toolbar sx={{
        // width: "83%",
        // top: 0,
        // position: "fixed",
        background: "#3C2223",
      }} className="flex justify-between">
        <Typography variant="h6" component="div" className="text-white">
          Tomoca Adimn
        </Typography>
        <div>
          <LogoutIcon className="text-white" />
        </div>
      </Toolbar>
    </Box>
  );
};

export default AppBar;
