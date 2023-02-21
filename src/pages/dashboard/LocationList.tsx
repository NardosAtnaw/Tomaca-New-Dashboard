import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#3C2223",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "theme.palette.action.hover",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("To.Mo.Ca Historical (ቶሞካ ሒስቶሪካል)", 159, 6.0, 24, 4.0),
  createData(" To.Mo.Ca Office Bar (ቶሞካ ኦፊስ ባር)", 237, 9.0, 37, 4.3),
  createData("  To.Mo.Ca Galleria ( ቶሞካ ጋለሪያ)", 262, 16.0, 24, 6.0),
  createData("To.Mo.Ca Meet up ( ቶሞካ ሚት አፕ) ", 305, 3.7, 67, 4.3),
  createData("To.Mo.Ca Roastery (ቶሞካ ሮስተሪ )", 356, 16.0, 49, 3.9),
  createData("To.Mo.Ca Historical (ቶሞካ ሒስቶሪካል)", 159, 6.0, 24, 4.0),
  createData(" To.Mo.Ca Office Bar (ቶሞካ ኦፊስ ባር)", 237, 9.0, 37, 4.3),
  createData("  To.Mo.Ca Galleria ( ቶሞካ ጋለሪያ)", 262, 16.0, 24, 6.0),
  createData("To.Mo.Ca Meet up ( ቶሞካ ሚት አፕ) ", 305, 3.7, 67, 4.3),
  createData("To.Mo.Ca Roastery (ቶሞካ ሮስተሪ )", 356, 16.0, 49, 3.9),
  createData("To.Mo.Ca Historical (ቶሞካ ሒስቶሪካል)", 159, 6.0, 24, 4.0),
  createData(" To.Mo.Ca Office Bar (ቶሞካ ኦፊስ ባር)", 237, 9.0, 37, 4.3),
  createData("  To.Mo.Ca Galleria ( ቶሞካ ጋለሪያ)", 262, 16.0, 24, 6.0),
  createData("To.Mo.Ca Meet up ( ቶሞካ ሚት አፕ) ", 305, 3.7, 67, 4.3),
  createData("To.Mo.Ca Roastery (ቶሞካ ሮስተሪ )", 356, 16.0, 49, 3.9),
];

export default function LocationList() {
  return (
    <>
      <Typography className="text-left mb-10 font-bold font-3 text-xl uppercase text-[#FF7A11]">
        View Location
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Location Name</StyledTableCell>
              <StyledTableCell align="right">Location Address</StyledTableCell>
              <StyledTableCell align="right">Location Phone</StyledTableCell>
              <StyledTableCell align="right">
                Location Description
              </StyledTableCell>
              <StyledTableCell align="right">
                Location Long/Lat{" "}
              </StyledTableCell>
              <StyledTableCell align="right">Location Link</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
