import AppHeader from "../../components/AppHeader/AppHeader";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BACKGROUND_IMG from "assets/pasal_bg.jpg";

import FooterCard from "components/FooterCard/FooterCard";
import PriceTable from "components/PriceTable/PriceTable";

const fontWeight = 800;
const fontFamily = "Myriad Pro Bold";
const linkStyle = {
  color: "white",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#ffbd59FF",
  },
  cursor: "pointer",
  fontFamily: fontFamily,
  fontWeight: fontWeight,
  lineHeight: 2,
  textDecoration: "none",
  boxShadow: "none",
};

const PricePage = () => {
  const Navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <AppHeader />
      <Box
        sx={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05)), url(${BACKGROUND_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          width: "100%",
          height: "30vh",
        }}
      >
        <Box
          sx={{
            background: "#00000088",
            flex: 1,
            padding: 4,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem",
            backdropFilter: "blur(2px)",
          }}
        >
          {/* <img src={EOS_RS_LOGO} height={"80px"} /> */}
          <Typography
            variant="h1"
            textAlign="center"
            width="60%"
            // fontWeight="800"
            color="white"
          >
            Harga 2024
          </Typography>

          {/* <Typography
            variant="h5"
            textAlign="center"
            width="60%"
            // fontWeight="800"
            color="white"
          >
            Program Penghitung Pajak
          </Typography> */}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: " column",
          height: "50vh",
          padding: "2rem",
          gap: "3rem",
        }}
      >
        <PriceTable />
      </Box>

      <Box
        sx={{
          background: "linear-gradient(#032852,#021122 73.22%,#010810)",
          height: "20vh",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <FooterCard
          Text={"Jl. Pangeran Tubagus Angke"}
          Icon={"LocationOnRounded"}
        />
        <FooterCard Text={"mytaxsoft@yahoo.com"} Icon={"EmailRounded"} />
        <FooterCard Text={"0818845111"} Icon={"LocalPhoneRounded"} />
        <FooterCard
          Text={"© Copyright 2024 Pasal 21"}
          Icon={"CopyrightRounded"}
        />
      </Box>
    </Box>
  );
};

export default PricePage;
