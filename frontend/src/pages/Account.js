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
import BankAccounts from './BankAccounts.json'
import Transaction from './Transaction';
//import data from 'https://raw.githubusercontent.com/WeiYangChia/DBSTT1/main/Main%20Challenge%20Data/BankAccount.json'

const rows = [{account_id: '123-456', account_type: 'savings', account_balance: '12345'},
              {account_id: '789-012', account_type: 'multiplier', account_balance: '67890'}]
const label = {inputProps: {'aria-label': 'Checkbox demo'}};

export default function Account() {
    const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    
  };
    

    
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
                        {BankAccounts.map((row) => (
                            <TableRow
                                key={row.AccountID}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.AccountID}
                                </TableCell>
                                <TableCell align="center">{row.AccountType}</TableCell>
                                <TableCell align="right">{row.AccountBalance}</TableCell>
                                <TableCell align="right">
                                    <Checkbox id={row.AccountID} />
                                </TableCell>
                            </TableRow>
                        ))}
                        {/* {rows.map((row) => (
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
                                    <Checkbox id={row.account_id} />
                                </TableCell>
                            </TableRow>
                        ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )

    
}


