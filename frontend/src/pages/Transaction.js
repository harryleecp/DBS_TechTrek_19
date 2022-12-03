import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import axios from "axios";
import orderBy from 'lodash/orderBy'
import Button from '@mui/material/Button';
import Transactions from './transactions.json'
import Alert from '@mui/material/Alert'
import isEmpty from 'lodash/isEmpty'
import filter from 'lodash/filter'
import map from 'lodash/map'
import PropTypes from 'prop-types'

export default class Transaction extends React.Component {
    static propTypes = {
        accountId: PropTypes.string.isRequired
    }

    static defaultProps = {
        // accountId: '12345'
    }

    state = {
        transactions: [],
        message: ''
    }

    componentDidMount() {
        this.getTransactions()
    }

    render() {
        return (
            <div>
                {!isEmpty(this.state.message) ? <Alert severity="success">{this.state.message}</Alert> : null}
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Transaction ID</TableCell>
                                <TableCell align="right">Receiving Account ID</TableCell>
                                <TableCell align="right">Transaction Amount</TableCell>
                                <TableCell align="right">Type</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.transactions.map((row) => (
                                <TableRow key={row.TransactionID}>
                                    <TableCell component="th" scope="row">{this.getDate(row.Date)}</TableCell>
                                    <TableCell component="th" scope="row">{row.TransactionID}</TableCell>
                                    <TableCell align="right">{row.ReceivingAccountID}</TableCell>
                                    <TableCell align="right">{row.TransactionAmount}</TableCell>
                                    <TableCell align="right">{row.Comment}</TableCell>
                                    <TableCell align="right">{this.renderDelete(row.TransactionID)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }

    renderDelete = (TransactionID) =>
        <Button variant="contained"
                onClick={() => this.onClick(TransactionID)}>Delete</Button>

    getDate = (date) => {
        const formattedDate = new Date(date)
        return formattedDate.toISOString().substring(0, 10)
    }

    onClick = (TransactionID) => {
        this.setState({
            message: 'Transaction has been deleted',
            transactions: filter(map(this.state.transactions, (transaction) =>
                transaction.TransactionID !== TransactionID && transaction))
        })
        setTimeout(() => {
            this.setState({message: ''})
        }, 2000)
        // axios.post('/transaction/delete', {accountId: this.props.accountId, TransactionId})
        //     .then((res) => this.setState({message: res.status}))
    }

    getTransactions = () => {
        // await axios.post('/dashboard', {accountId: this.props.accountId})
        //     .then((res) => this.setState({transactions: orderBy(Transactions, 'Date', 'desc')}))
        const res = orderBy(Transactions, 'Date', 'desc')
        this.setState({transactions: res})
    }
}
