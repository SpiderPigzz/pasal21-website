import { Grid } from "@mui/material";
import FooterCard from "components/FooterCard/FooterCard";

const Footer = () => {
  return (
    <Grid
      container
      sx={{
        background: "linear-gradient(#032852,#021122 73.22%,#010810)",
        minHeight: "200px",
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
    </Grid>
  );
};

export default Footer;
