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
import BankAccounts from './BankAccounts.json'
import Transaction from './Transaction';
//import data from 'https://raw.githubusercontent.com/WeiYangChia/DBSTT1/main/Main%20Challenge%20Data/BankAccount.json'

const rows = [{account_id: '123-456', account_type: 'savings', account_balance: '12345'},
              {account_id: '789-012', account_type: 'multiplier', account_balance: '67890'}]
const label = {inputProps: {'aria-label': 'Checkbox demo'}};

export default function Account() {
    const [selectedAccount, setAccount] = React.useState('123123');

  const handleChange = (event) => {
    if (event.target.value == selectedAccount) {
        setAccount('')
    } else {
        setAccount(event.target.value);
    }
  };

  const isChecked = (AccountID) => selectedAccount == AccountID
    
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
                            <TableCell align="center">Balance</TableCell>
                            <TableCell align="center"> 
                                Select
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {BankAccounts.map((row) => (
                            <div><TableRow
                                key={row.AccountID}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.AccountID}
                                </TableCell>
                                <TableCell align="center">{row.AccountType}</TableCell>
                                <TableCell align="center">{row.AcccountBalance}</TableCell>
                                <TableCell align="center">
                                    <Button id={row.AccountID} 
                                    value={row.AccountID}
                                        onClick={handleChange}>View Transactions</Button>
                                </TableCell>
                            </TableRow>
            
                            {isChecked(row.AccountID) ? <Transaction accountId={selectedAccount}/> : null}
                            </div>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )

    
}


