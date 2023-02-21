import * as React from "react";
import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "../../components/Table";
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
    backgroundColor: theme.palette.action.hover,
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
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function ViewOrder() {
  const columns = [
    { title: "User Name", field: "name" },
    { title: "User Order ", field: "surname" },
    {
      title: " Membership Name",
      field: "mn",
      // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    },

    { title: "Location", field: "surname" },
    {
      title: "Status",
      field: "birthCity",
      lookup: { 34: "Pending", 63: "Done" },
    },
    { title: "Total Price", field: "birthYear", type: "numeric" },
  ];
  const data = [
    {
      name: "Mehmet",
      surname: "Baran",
      birthYear: 197,
      birthCity: 63,
      mn: "Gold",
    },
    {
      name: "Zerya Betül",
      surname: "Baran",
      birthYear: 217,
      birthCity: 34,
      mn: "Gold",
    },
    {
      name: "Mehmet",
      surname: "Baran",
      birthYear: 187,
      birthCity: 63,
      mn: "Sliver",
    },
    {
      name: "Zerya Betül",
      surname: "Baran",
      birthYear: 207,
      birthCity: 34,
      mn: "Gold",
    },
    {
      name: "Mehmet",
      surname: "Baran",
      birthYear: 170,
      birthCity: 63,
      mn: "Gold",
    },
    {
      name: "Zerya Betül",
      surname: "Baran",
      birthYear: 207,
      birthCity: 34,
      mn: "Sliver",
    },
  ];
  const detailPanel = [
    {
      tooltip: "Show Name",
      render: (rowData) => {
        return (
          <div
            style={{
              fontSize: 100,
              textAlign: "center",
              color: "white",
              backgroundColor: "#43A047",
            }}
          >
            {rowData.name}
          </div>
        );
      },
    },
  ];
  return (
    <TableContainer component={Paper}>
      <Table
        title="Order"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);

                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve();
              }, 1000);
            }),
        }}
        detailPanel={(rowData) => {
          return (
            <div className="p-5">
              <p className="text-xl text-[#FF7A11] ">
                Details for order {rowData.orderId}
              </p>
              <p className="text-[#3C2223] mt-2 ">
                {" "}
                Order Name: {rowData.customerName}
              </p>
              <p className="text-[#3C2223] mt-2 ">
                Inventory Type: {rowData.orderTotal}
              </p>
              <p className="text-[#3C2223] mt-2 ">
                Order date: {rowData.orderDate}
              </p>
              <p className="text-[#3C2223] mt-2 ">
                Order Quantity: {rowData.orderTotal}
              </p>
              <p className="text-[#3C2223] mt-2 ">
                Order Price: {rowData.orderTotal}
              </p>
              <p className="text-[#3C2223] mt-2 ">
                Order total: {rowData.orderTotal}
              </p>
            </div>
          );
        }}
        options={{
          detailPanelType: "single",
          detailPanelColumnAlignment: "right",
          paging: true,
          pageSize: 10,
          search: true,
          toolbarButtonAlignment: "left",
          actionsColumnIndex: -1,
          addRowPosition: "last",
        }}
        detailPanelOptions={{
          placement: "bottom",
        }}
      ></Table>
    </TableContainer>
  );
}
