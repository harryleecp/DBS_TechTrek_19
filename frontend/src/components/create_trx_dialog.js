import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AutoComplete from '@mui/material/AutoComplete';
import axios from "axios";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [account, setAccount] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
    axios
      .post(`${process.env.REACT_APP_BACKEND_API}/account/list`, {
        //UserID,
      })
      .then(function (response) {
        //setUserSession(response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCreateSchedule = (event) => {
    const fromAccount = event?.target?.fromAccount?.value;
    const toAccount = event?.target?.toAccount?.value;
    const date = event?.target?.date?.value;
    const trxAmount = event?.target?.trxAmount?.value;
    const comment = event?.target?.comment?.value;
    
    axios
      .post(`${process.env.REACT_APP_BACKEND_API}/transaction/add`, {
        fromAccount, //AccountID,
        toAccount, //ReceivingAccountID,
        date, //Date
        trxAmount, //TransactionAmount,
        comment//Comment
      })
      .then(function (response) {
        //setUserSession(response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Schedule New Transaction
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Schedule Transaction</DialogTitle>
        <DialogContent>
          {/*<DialogContentText>
            Sample text description
          </DialogContentText>
  <br/>*/}
          <AutoComplete
            disablePortal
            id="fromAccount"
            options={options}
            sx={{ width: 280}}
            margin='normal'
            renderInput={(params) => <TextField {...params} variant="standard" label="From: "/>}
          />
        
        <TextField 
          id="toAccount" 
          label="To: " 
          variant="standard"
          sx={{ width: 280 }}
          margin='normal'
        />
        <br/>
        <TextField 
          id="date" 
          label="Date: " 
          variant="standard"
          sx={{ width: 280 }}
          margin='normal'
        />
        <br/>
        <TextField
          id="trxAmount"
          label="Amount: "
          type="number"
          variant="standard"
          sx={{width:280}}
          margin='normal'
        />
        <br/>
        <TextField
          id="comments"
          label="Comments"
          multiline
          rows={3}
          sx={{ width: 280 }}
          defaultValue=""
        />
      </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreateSchedule}>Schedule</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const options = ['DBS Savings 123-456-789-10', 'DBS Current 843-347-372-12'];