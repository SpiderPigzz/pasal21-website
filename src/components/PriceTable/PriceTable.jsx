import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  styled,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "20px",
  },
  tableHeader: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme, index }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f5f5f5",
  },
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
  "& > td": {
    borderRight: "1px solid #ddd", // Adjust the color as needed
  },
  "& > td:last-child": {
    borderRight: "none", // Remove border for the last cell
  },
}));

const headerStyle = {
  fontSize: 20,
  fontWeight: 800,
  color: "white",
  textAlign: "center",
};

const PriceTable = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} style={{ overflow: "auto" }}>
      <Table>
        <TableHead>
          <StyledTableRow>
            <TableCell className={classes.tableHeader} sx={headerStyle}>
              Jumlah Karyawan
            </TableCell>
            <TableCell className={classes.tableHeader} sx={headerStyle}>
              Harga Netto
            </TableCell>
            <TableCell className={classes.tableHeader} sx={headerStyle}>
              Harga Gross
            </TableCell>
            <TableCell className={classes.tableHeader} sx={headerStyle}>
              Service
            </TableCell>
            <TableCell className={classes.tableHeader} sx={headerStyle}>
              Note
            </TableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow theme={classes.tableBody}>
            <TableCell>1 s/d 5</TableCell>
            <TableCell>Gratis</TableCell>
            <TableCell>Gratis</TableCell>

            <TableCell>N/A</TableCell>

            <TableCell>Contact melalui mytaxsoft@yahoo.com</TableCell>
          </StyledTableRow>

          <StyledTableRow theme={classes.tableBody}>
            <TableCell>6 s/d 35</TableCell>
            <TableCell>Rp. 5.000.000</TableCell>
            <TableCell>Rp. 7.000.000</TableCell>

            <TableCell rowSpan={5}>Install di tempat</TableCell>

            <TableCell rowSpan={5}>
              Diluar Jakarta, semua instalasi lewat internet.
            </TableCell>
          </StyledTableRow>

          <StyledTableRow theme={classes.tableBody}>
            <TableCell>36 s/d 50</TableCell>
            <TableCell>Rp. 10.000.000</TableCell>
            <TableCell>Rp. 12.000.000</TableCell>
          </StyledTableRow>
          <StyledTableRow theme={classes.tableBody}>
            <TableCell>51 s/d 100</TableCell>
            <TableCell>Rp. 15.000.000</TableCell>
            <TableCell>Rp. 17.000.000</TableCell>
          </StyledTableRow>
          <StyledTableRow theme={classes.tableBody}>
            <TableCell>101 s/d 200</TableCell>
            <TableCell>Rp. 20.000.000</TableCell>
            <TableCell>Rp. 22.000.000</TableCell>
          </StyledTableRow>
          <StyledTableRow theme={classes.tableBody}>
            <TableCell>200 s/d unlimited</TableCell>
            <TableCell>Rp. 30.000.000</TableCell>
            <TableCell>Rp. 32.000.000</TableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default PriceTable;
