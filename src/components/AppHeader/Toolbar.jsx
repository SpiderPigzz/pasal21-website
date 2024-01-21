import { Button, Stack, Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { getRoute } from "../../utils/routes";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import PASAL_LOGO from "assets/Mytaxsoft.png";

const fontWeight = 800;
const fontFamily = "Myriad Pro Bold";

const CustomToolbar = ({ isMapPage, handleDrawerOpen, open }) => {
  const Navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  function PasalIcon(props) {
    return (
      <img
        src={PASAL_LOGO}
        alt="logo"
        style={{ width: "165px", height: "64px" }}
      />
    );
  }

  return (
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
        sx={{ width: "100%", justifyContent: "end", height: "100%" }}
        direction={"row"}
      >
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
      </Stack>
    </Toolbar>
  );
};

export default CustomToolbar;
