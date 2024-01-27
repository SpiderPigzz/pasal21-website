import { Button, Stack, Toolbar, Drawer, Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { getRoute } from "../../utils/routes";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import PASAL_LOGO from "assets/Mytaxsoft.png";
import useScreenSize from "hooks/useScreenSize";
import { useState } from "react";
import DynamicIconMUI from "components/DynamicIconMUI";

const fontWeight = 800;
const fontFamily = "Myriad Pro Bold";

const CustomToolbar = ({ isMapPage, handleDrawerOpen, open }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const Navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const { isDesktopView } = useScreenSize();

  const handleMenuOpen = () => {
    setOpenDrawer(true);
  };

  const handleMenuClose = () => {
    setOpenDrawer(false);
  };

  function PasalIcon(props) {
    return (
      <img
        src={PASAL_LOGO}
        alt="logo"
        style={{ width: "165px", height: "64px" }}
      />
    );
  }
  const MenuButtons = ({ currentPath, variant }) => {
    return (
      <>
        <Button
          onClick={() => {
            Navigate(getRoute("home"));
          }}
          sx={{
            // backgroundColor: currentPath === "/" ? "#ffbd59FF" : "transparent",
            color: currentPath === "/" ? "#rgb(85, 77, 225)" : "black",
            "&:hover": {
              backgroundColor: "transparent",
              color: "rgb(85, 77, 225)",
            },

            paddingX: "2rem",
            // Add other styles for highlighting
          }}
        >
          <Typography fontWeight={fontWeight} fontFamily={fontFamily}>
            Home
          </Typography>
        </Button>

        {variant == "mobile" ? <Divider /> : <></>}
        <Button
          onClick={() => {
            Navigate(getRoute("price"));
          }}
          sx={{
            color: currentPath === "/price" ? "rgb(85, 77, 225)" : "black",
            "&:hover": {
              backgroundColor: "transparent",
              color: "rgb(85, 77, 225)",
            },
            paddingX: "2rem",
            // Add other styles for highlighting
          }}
        >
          <Typography fontWeight={fontWeight} fontFamily={fontFamily}>
            price
          </Typography>
        </Button>
      </>
    );
  };

  return (
    <>
      <Toolbar>
        {isMapPage ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <></>
        )}

        <Button
          onClick={() => {
            Navigate(getRoute("home"));
          }}
        >
          <PasalIcon size={54} />
        </Button>
        {/* <Typography
        variant="h5"
        color="white"
        sx={{ flexGrow: 1, fontWeight: 800, letterSpacing: 3, ml: "1%" }}
      >
        EOS-RS
      </Typography> */}
        <Stack
          sx={{
            width: "100%",
            justifyContent: "end",
            height: "100%",
            alignItems: "center",
          }}
          direction={"row"}
        >
          {isDesktopView ? (
            <MenuButtons currentPath={currentPath} />
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleMenuOpen}
              // edge="start"
              sx={{ height: "fit-content" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Toolbar>
      <Drawer anchor="right" open={openDrawer} onClose={handleMenuClose}>
        <Stack
          direction="row"
          // justifyContent="space-between"
          sx={{
            padding: "1rem",
            borderBottom: "1px solid #ccc",
            backgroundColor: "#333",
            color: "white",
            alignItems: "center",

            width: "40vw",
          }}
        >
          <IconButton color="inherit" onClick={handleMenuClose}>
            <DynamicIconMUI iconName={"Close"} />
          </IconButton>
          <Typography sx={{ fontWeight: 800 }} variant="h5">
            Menu
          </Typography>
        </Stack>
        <Stack sx={{ padding: 1 }}>
          <MenuButtons currentPath={currentPath} variant={"mobile"} />
        </Stack>
      </Drawer>
    </>
  );
};

export default CustomToolbar;
