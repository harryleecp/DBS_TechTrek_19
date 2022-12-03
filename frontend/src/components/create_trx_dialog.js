import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AutoComplete from '@mui/material/AutoComplete';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

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
          <DialogContentText>
            Sample text description
          </DialogContentText>
          <br/>
          <AutoComplete
            disablePortal
            id="from-account"
            options={options}
            sx={{ width: 280}}
            margin='normal'
            renderInput={(params) => <TextField {...params} variant="standard" label="From: "/>}
          />
        
        <TextField 
          id="to-account" 
          label="To: " 
          variant="standard"
          sx={{ width: 280 }}
          margin='normal'
        />
        <br/><br/>
        <TextField
          id="outlined-multiline-static"
          label="Comments"
          multiline
          rows={3}
          sx={{ width: 280 }}
          defaultValue=""
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Schedule</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const options = ['DBS Savings 123-456-789-10', 'DBS Current 843-347-372-12'];