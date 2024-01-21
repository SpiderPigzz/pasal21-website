//Top Bar that deals with user login
import React from "react";
import { useNavigate } from "react-router-dom";
import { removeToken } from "utils/helper";
import { getRoute } from "../../utils/routes";
import NavBar from "../Reusables/NavBar";
import { Box, Button, Toolbar, Typography, AppBar } from "@mui/material";
import { HEADER_HEIGHT } from "utils/constants";
import logo from "assets/Mytaxsoft.png";
import Noise from "assets/noise.svg";
import { useTheme } from "@mui/material/styles";
import CustomToolbar from "./Toolbar";

const AppHeader = () => {
  const Navigate = useNavigate();
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        height: HEADER_HEIGHT,
        zIndex: 100,
        // backgroundColor: "black",
        backgroundColor: `#CCCCCCAA`,
        backdropFilter: "blur(8px)",
      }}
    >
      <CustomToolbar />
    </AppBar>
    // </Box>
  );
};

export default AppHeader;
