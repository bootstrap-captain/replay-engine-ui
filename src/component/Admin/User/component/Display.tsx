import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {UserEntity} from "../entity/UserEntity";
import {Box, Stack} from "@mui/material";
import Delete from "./Delete";
import Edit from "./Edit";

const tableHeader: string[] = ['SOEID', 'TYPE', 'OPERATIONS']

interface DisplayProps {
    data: UserEntity[],
    searchByCondition: () => void
}

export default function Display(props: DisplayProps) {

    const rows: UserEntity[] = props.data;
    const {searchByCondition} = props;

    console.log('display', rows)

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
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell align="left">{row.username}</TableCell>
                                <TableCell align="left">{row.type}</TableCell>
                                <TableCell align="left">
                                    <Stack spacing={3} direction="row">
                                        {/*编辑*/}
                                        <Edit userId={row.userId} type={row.type} username={row.username}
                                              searchByCondition={searchByCondition}/>
                                        {/*删除*/}
                                        <Delete userId={row.userId} searchByCondition={searchByCondition}/>
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


