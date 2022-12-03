import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import Create_Trx from "../components/create_trx_dialog"

export default class Transaction extends React.Component {
    componentDidMount() {
        getTransactions()
    }

    state = {
        accountId: '12345',
        transactions: [{
            "TransactionID": 1,
            "AccountID": 958945214,
            "ReceivingAccountID": 621156213,
            "Date": "2022-11-08T04:00:00.000Z",
            "TransactionAmount": 8996.00,
            "Comment": "School Fees"
        },{
            "TransactionID": 2,
            "AccountID": 958945214,
            "ReceivingAccountID": 12384222,
            "Date": "2022-11-09T04:00:00.000Z",
            "TransactionAmount": 1000.00,
            "Comment": "Transport Fees"
        }]
    }

    render() {
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Transaction ID</TableCell>
                                <TableCell align="right">Receiving Account ID</TableCell>
                                <TableCell align="right">Transaction Amount</TableCell>
                                <TableCell align="right">Type</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.transactions.map((row) => (
                                <TableRow key={row.TransactionID}>
                                    <TableCell component="th" scope="row">{row.Date}</TableCell>
                                    <TableCell component="th" scope="row">{row.TransactionID}</TableCell>
                                    <TableCell align="right">{row.ReceivingAccountID}</TableCell>
                                    <TableCell align="right">{row.TransactionAmount}</TableCell>
                                    <TableCell align="right">{row.Comment}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>
                <Create_Trx/>
            </div>
        )
    }
}

const getTransactions = async () =>
    await axios.post('/dashboard', {accountId: this.state.accountId})
        .then((res) => {

            this.setState({transactions: res})
        })
