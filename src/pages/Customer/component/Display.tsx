import React from "react";
import {Box, Stack} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {CustomerDisplay} from "../entity/CustomerEntity";

type DisplayProps = {
    deleteRender: (displayEntity: CustomerDisplay) => React.ReactNode;
    editRender: (displayEntity: CustomerDisplay) => React.ReactNode;
    dataTable: CustomerDisplay[],
}

const tableHeader: string[] = ['NAME', 'PHONE-NUMBER', 'EMAIL','AGE','ADDRESS','GENDER','BIRTHDAY','OPERATION']

export default function Display(props: DisplayProps) {

    const {dataTable, deleteRender, editRender} = props;
    return (
        <Box>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    {/*表头*/}
                    <TableHead>
                        <TableRow>
                            {tableHeader.map((item, index) => (
                                <TableCell align='left' key={index}>
                                    {item}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    {/*具体数据*/}
                    <TableBody>
                        {dataTable.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell align="left">{row.customerName}</TableCell>
                                <TableCell align="left">{row.customerPhoneNumber}</TableCell>
                                <TableCell align="left">{row.customerEmail}</TableCell>
                                <TableCell align="left">{row.customerAge}</TableCell>
                                <TableCell align="left">{row.customerAddress}</TableCell>
                                <TableCell align="left">{row.customerGender}</TableCell>
                                <TableCell align="left">{row.customerPhoneNumber}</TableCell>
                                <TableCell align="left">
                                    <Stack spacing={3} direction="row">
                                        {/*编辑*/}
                                        {editRender(row)}

                                        {/*删除*/}
                                        {deleteRender(row)}
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

    );
}

