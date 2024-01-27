import styled from "@emotion/styled";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";
import useScreenSize from "../../../hooks/useScreenSize";

const CustomSkeuCard = styled(motion("div"))(
  ({ theme, backgroundcolor, hovercolor, isdesktopview }) => ({
    borderRadius: 15,
    // boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
    backgroundColor: backgroundcolor,
    // color: "#333",
    fontWeight: "bold",
    transition: "all 0.2s ease",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    "&:hover": {
      backgroundColor: hovercolor,
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
      transform: "translate(0px, -1px)",
    },
    "&:active": {
      boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.3)",
      transform: "translate(0px, 1px)",
    },
    // "&:after": {
    //   content: "''",
    //   background: `url(/static/noise.png)`,
    //   position: "absolute",
    //   top: "0px",
    //   left: "0px",
    //   width: "100%",
    //   height: "100%",
    //   zIndex: -1,
    //   borderRadius: 15,
    //   opacity: 0.2 /* Here is your opacity */,
    // },

    backdropFilter: isdesktopview ? "blur(4px)" : "none",
    boxShadow: `0 3px 5px 2px rgba(139, 156, 180, 0.3)`,
  })
);

const SkeuCard = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  children,
  backgroundColor,
  hoverColor,
  style,
  sx,
  innerRef,
}) => {
  const { isDesktopView } = useScreenSize();
  return (
    <CustomSkeuCard
      ref={innerRef}
      backgroundcolor={backgroundColor}
      hovercolor={hoverColor}
      isdesktopview={isDesktopView}
      style={style}
    >
      {/* {imageSrc ? (
        <CardMedia
          component="img"
          height="140"
          image={imageSrc}
          alt={imageAlt}
        />
      ) : (
        <></>
      )}

      <CardContent>
        {title ? (
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        ) : (
          <></>
        )}

        {subtitle ? (
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        ) : (
          <></>
        )} */}

      <CardContent>{children}</CardContent>
    </CustomSkeuCard>
  );
};
export default SkeuCard;
