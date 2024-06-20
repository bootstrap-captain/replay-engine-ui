import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {User} from "./User";
import {Box, Stack} from "@mui/material";
import Delete from "./Delete";
import Edit from "./Edit";

const tableHeader: string[] = ['SOEID', 'TYPE', 'OPERATIONS']

interface DisplayProps {
    data: [User],
    setWriteOperation: Function
}

export default function Display(props: any) {

    const rows: [User] = props.data;

    return (
        <Box>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    {/*表头*/}
                    <TableHead>
                        <TableRow key={"12"}>
                            {tableHeader.map((item, index) => (
                                <TableCell align='left' key={index}>
                                    {item}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    {/*具体数据*/}
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.userid}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell align="left">{row.username}</TableCell>
                                <TableCell align="left">{row.type}</TableCell>
                                <TableCell align="left">
                                    <Stack spacing={3} direction="row">
                                        {/*编辑*/}
                                        <Edit userId={row.userid} type={row.type} username={row.username}/>
                                        {/*删除*/}
                                        <Delete userId={row.userid}/>
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


