import { Button, Typography } from "@mui/material";

const SkeuButton = ({ children, maincolor, ...props }) => {
  return (
    <Button
      {...props}
      sx={{
        borderRadius: 2,
        boxShadow: "3px 2px 3px rgba(0, 0, 0, 0.2)",
        // boxShadow: `0 3px 5px 2px rgba(139, 156, 180, 0.1)`,
        backgroundColor: maincolor,
        color: "secondary",
        fontWeight: "bold",
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: "#E0E0E0",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
          transform: "translate(0px, -2px)",
        },
        "&:after": {
          content: "''",
          background: `url(/static/noise.png)`,
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          zIndex: -1,
          borderRadius: 2,
          opacity: 0.3 /* Here is your opacity */,
        },
        backdropFilter: "blur(8px)",
      }}
    >
      <Typography variant="h6">{children}</Typography>
    </Button>
  );
};

export default SkeuButton;
