import React from "react";
import { API, HEADER_HEIGHT } from "../../../utils/constants";
import { useState, useEffect } from "react";

import Noise from "assets/noise.svg";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid,
  Stack,
  Chip,
  Skeleton,
  IconButton,
} from "@mui/material";
import ScaleUpOnHover from "utils/Animations/ScaleUpOnHover";
import { formatDate, textToColorHex } from "utils/helper";
import DynamicIconMUI from "components/DynamicIconMUI";

const ItemCard = ({ Title, Icon, Description }) => {
  // const [loading, setLoading] = useState(true);

  return (
    <Grid item xs={12} md={3} sx={{ maxWidth: "100%" }}>
      <ScaleUpOnHover>
        <Card
          sx={{
            maxWidth: "100%",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            background: "rgba(255, 255, 255, 1)",
            borderRadius: "16px",
            height: "20rem",
            // boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
            // backgroundColor: "transparent",
            // border: "1px solid rgba(180, 240, 255, 0.29)",
            // boxShadow: "0",
          }}
        >
          <CardContent
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Stack gap={4} sx={{ alignItems: "center" }}>
              <IconButton
                sx={{
                  border: `2px solid #ffbd59`,
                  borderRadius: "50%",
                  height: "fit-content",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <DynamicIconMUI
                  sx={{ fontSize: 60 }}
                  color={"orangecolor"}
                  iconName={Icon}
                />
              </IconButton>

              <Typography
                style={{ wordWrap: "break-word" }}
                variant="h5"
                color={"secondary"}
                textAlign={"center"}
              >
                {Title}
              </Typography>

              <Typography
                sx={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }}
                variant="body1"
                color={"gray"}
                textAlign={"center"}
              >
                {Description}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </ScaleUpOnHover>
    </Grid>
  );
};

export default ItemCard;
