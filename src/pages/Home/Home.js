import { HEADER_HEIGHT } from "../../utils/constants";
import AppHeader from "../../components/AppHeader/AppHeader";
import { Button, Box, Grid, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

import BACKGROUND_IMG from "assets/pasal_bg.jpg";

import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import GRAPH_IMG from "assets/Graph.jpg";
import HOMEPAGE_IMG from "assets/HomePage.png";

import ItemCard from "components/HomePage/ItemCard/ItemCard";
import FeatureCard from "components/HomePage/FeatureCard/FeatureCard";
import FooterCard from "components/FooterCard/FooterCard";
import DownloadButton from "components/HomePage/DownloadButton/DowloadButton";

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

const itemsPerPage = 8;

const HomePage = () => {
  const Navigate = useNavigate();

  const scrollToStart = () => {
    let events = document.getElementById("learn-more").getBoundingClientRect();
    // e.preventDefault(); // Stop Page Reloading
    events &&
      window.scrollTo({
        behavior: "smooth",
        top:
          events.top -
          document.body.getBoundingClientRect().top -
          parseInt(HEADER_HEIGHT, 10),
      });
  };

  return (
    <Box>
      <AppHeader />
      <Box
        sx={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05)), url(${BACKGROUND_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          width: "100%",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            background: "#00000088",
            flex: 1,
            display: "flex",
            justifyContent: "center",
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
            PPh 21
          </Typography>

          <Typography
            variant="h5"
            textAlign="center"
            width="60%"
            // fontWeight="800"
            color="white"
          >
            Program Penghitung Pajak
          </Typography>
          {/* <Button
            variant="contained"
            // type="primary"

            color="primary"
            sx={{ width: "50%", borderRadius: "5rem", marginTop: "2rem" }}
            onClick={scrollToStart}
            // onClick={() => {
            //   Navigate(getRoute("home"));
            // }}
            // href="https://earthobservatory.sg/research/centres-labs/eos-rs"
          >
            Learn More
          </Button> */}
          <DownloadButton />
          <IconButton size="large" onClick={scrollToStart}>
            <KeyboardDoubleArrowDownIcon color="whitecolor" />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: " column",
          flexGrow: 1,
          padding: "2rem",
          gap: "3rem",
          paddingTop: HEADER_HEIGHT,
        }}
        id={"learn-more"}
      >
        <Grid sx={{ padding: "1rem" }} container spacing={{ xs: 2, md: 3 }}>
          <ItemCard
            Title={"TAMPILAN YANG SEDERHANA"}
            Description={
              "Didesign dengan tampilan interface yang sederhana, mudah digunakan oleh user"
            }
            Icon={"ContentCopyRounded"}
          />
          <ItemCard
            Title={"PROSES BISNIS YANG MUDAH"}
            Description={
              "Proses bisnis perhitungan gaji yang telah disederhanakan yang menghasilkan proses output yang cepat dan akurat"
            }
            Icon={"SettingsSuggestRounded"}
          />
          <ItemCard
            Title={"DATABASE YANG DIANDALKAN"}
            Description={
              "Database yang simple dan membutuhkan size yang kecil, dapat dipindahkan dari storage ke storage"
            }
            Icon={"StorageRounded"}
          />
          <ItemCard
            Title={"PROSES SINGKAT DAN AKURAT"}
            Description={
              "Input, proses dan output hanya memerlukan waktu yang singkat, dan hasilnya akurat"
            }
            Icon={"TrackChangesRounded"}
          />
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: " column",
          flexGrow: 1,
          padding: "2rem",
          gap: "3rem",
          paddingTop: HEADER_HEIGHT,
          backgroundColor: "rgb(245, 250, 253)",
        }}
      >
        <Box sx={{ minHeight: "80vh" }}>
          <Grid
            sx={{ padding: "1rem", spacing: { xs: 2, md: 3 }, rowGap: 16 }}
            container
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                textAlign="center"

                // fontWeight="800"
              >
                Canggih
              </Typography>

              <Typography
                variant="h5"
                textAlign="center"
                // fontWeight="800"
                color={"gray"}
              >
                Aplikasi desktop yang menyajikan perhitungan gaji karyawan,
                tunjangan karyawan, BPJS, PPH21, pembuatan laporan dan cetak
                form 1721- I bulanan dan tahunan
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img src={GRAPH_IMG} style={{ width: "80%" }} />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img src={HOMEPAGE_IMG} style={{ width: "80%" }} />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                textAlign="center"

                // fontWeight="800"
              >
                Efisien
              </Typography>

              <Typography
                variant="h5"
                textAlign="center"
                // fontWeight="800"
                color={"gray"}
              >
                Optimalkan pengelolaan sumber daya manusia dengan aplikasi
                desktop inovatif kami. Sederhana dan efisien, simplifikasi
                proses administrasi keuangan perusahaan Anda dengan solusi kami
                yang andal
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: " column",
          flexGrow: 1,
          padding: "2rem",
          gap: "3rem",
          // paddingTop: HEADER_HEIGHT,
        }}
      >
        <Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Typography variant="h3" fontWeight="800" textAlign={"center"}>
              Fitur Aplikasi PPH 21
            </Typography>
          </Box>
          <Grid sx={{ padding: "1rem" }} spacing={2} container>
            <FeatureCard
              Title={"Perhitungan Gaji Untuk Karyawan"}
              Description={
                "Berfungsi melakukan perhitungan gaji dan tunjangan karyawan digunakan oleh HRD untuk menghasilkan laporan dan slip gaji dan laporan PPH 21"
              }
              Icon={"CalculateRounded"}
            />
            <FeatureCard
              Title={"Laporan Penggajian & Slip Gaji"}
              Description={
                "Dapat menghasilkan laporan penggajian bulanan dan  slip gaji yang dienkrip dalam format PDF yang dikirim ke email karyawan"
              }
              Icon={"PictureAsPdfRounded"}
            />
            <FeatureCard
              Title={"Form A1"}
              Description={
                "Menyediakan cetak form A1 yang diberikan kepada karyawan untuk laporan SPT tahunan"
              }
              Icon={"TextSnippetRounded"}
            />
            <FeatureCard
              Title={"BPJS Kesehatan & Pensiun, Jamsostek"}
              Description={
                "Kalkulasi BPJS kesehatan, BPJS pensiun dan Jamsostek"
              }
              Icon={"HealthAndSafetyRounded"}
            />
            <FeatureCard
              Title={"Kehandalan Penyimpanan Data Karyawan"}
              Description={
                "Jumlah data record karyawan yang disimpan pada aplikasi tidak terbatas (unlimited)"
              }
              Icon={"SaveRounded"}
            />
            <FeatureCard
              Title={"Form 1721 I-Bulanan dan Tahunan"}
              Description={
                "1721-I bulanan dan tahunan dapat di export ke E-SPT"
              }
              Icon={"CalendarMonthRounded"}
            />
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          background: "linear-gradient(#032852,#021122 73.22%,#010810)",
          height: "200px",
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

export default HomePage;
