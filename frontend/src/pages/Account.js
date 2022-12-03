import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import data from 'https://raw.githubusercontent.com/WeiYangChia/DBSTT1/main/Main%20Challenge%20Data/BankAccount.json'

const rows = [{account_id: '123-456', account_type: 'savings', account_balance: '12345'},
              {account_id: '789-012', account_type: 'multiplier', account_balance: '67890'}]
const label = {inputProps: {'aria-label': 'Checkbox demo'}};

export default function Account() {
    // const [state, setState] = React.useState({
    //     gilad: true,
    //     jason: false,
    //     antoine: false,
    //   });
    
    //   const handleChange = (event) => {
    //     setState({
    //       ...state,
    //       [event.target.name]: event.target.checked,
    //     });
    //   };
    
    //   const { gilad, jason, antoine } = state;
    //   const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
    

    
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button href="#text-buttons"
                    onClick={() => {
                    //Need to redirect to transactions
                    alert('Choose an account');
                    }}
                >
                    Schedule Transaction
                </Button>
            </Stack>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="center">Type</TableCell>
                            <TableCell align="right">Balance</TableCell>
                            <TableCell align="right"> 
                                Select
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.account_id}
                                </TableCell>
                                <TableCell align="center">{row.account_type}</TableCell>
                                <TableCell align="right">{row.account_balance}</TableCell>
                                <TableCell align="right">
                                    <Checkbox />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )

    
}


