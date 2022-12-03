import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import BankAccounts from './BankAccounts.json'
import Transaction from './Transaction';
import {getToken, getUser} from "../utils/Common";

const rows = [{account_id: '123-456', account_type: 'savings', account_balance: '12345'},
              {account_id: '789-012', account_type: 'multiplier', account_balance: '67890'}]
const label = {inputProps: {'aria-label': 'Checkbox demo'}};

export default function Account() {
    useEffect(() => {
       axios.post(`http://${process.env.REACT_APP_BACKEND_API}/account/list`,
           {userId: getUser()},
           {
               headers: {
                   Authorization: `Bearer ${getToken()}`,
               }
           })
           .then((res) => setAccounts(res.data))
    }, []);
    const [selectedAccount, setAccount] = React.useState('');
    const [Accounts, setAccounts] = React.useState(BankAccounts);

  const handleChange = (event) => {
    if (event.target.value == selectedAccount) {
        setAccount('')
    } else {
        setAccount(event.target.value);
    }
  };

  const isChecked = (AccountID) => selectedAccount == AccountID;
    
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">ID</TableCell>
                            <TableCell align="left">Type</TableCell>
                            <TableCell align="left">Balance</TableCell>
                            <TableCell align="left">Select</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Accounts.map((row) => (
                            <React.Fragment>
                                <TableRow
                                    key={row.accountId}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.accountId}
                                    </TableCell>
                                    <TableCell align="left">{row.accountType}</TableCell>
                                    <TableCell align="left">{row.acccountBalance}</TableCell>
                                    <TableCell align="left">
                                        <Button id={row.accountId}
                                                value={row.accountId}
                                                onClick={handleChange}>View Transactions</Button>
                                    </TableCell>
                                </TableRow>
                                {isChecked(row.accountId) ? <Transaction accountId={selectedAccount}/> : null}
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )

    
}


