import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function MuiTable() {
  const rows = [
    {
      id: 1,
      firstName: "Umut",
      lastName: "Tosun",
      age: 21,
    },
    {
      id: 2,
      firstName: "Ahmet",
      lastName: "Koc",
      age: 23,
    },
    {
      id: 3,
      firstName: "Samet",
      lastName: "Tuncay",
      age: 23,
    },
    {
      id: 4,
      firstName: "Diyar",
      lastName: "Alma",
      age: 21,
    },
  ];
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Isim</TableCell>
          <TableCell>soyisim</TableCell>
          <TableCell>yas</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((rows, index) => (
          <TableRow key={rows.id}>
            <TableCell>{rows.id}</TableCell>
            <TableCell>{rows.firstName}</TableCell>
            <TableCell>{rows.lastName}</TableCell>
            <TableCell>{rows.age}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default MuiTable;
