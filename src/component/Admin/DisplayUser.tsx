import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {queryUser} from "./User/UserAxios";
import {UserEntity} from "./User/UserEntity";


export default function DisplayUser() {


    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">SOEID</TableCell>
                        <TableCell align="left">Type</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell align="left">{row.username}</TableCell>
                                <TableCell align="left">{row.type}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

let rows: Array<UserEntity> = queryUser('', '');
