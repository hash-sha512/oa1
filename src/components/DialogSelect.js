import React, {useState, useReducer} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


import Datadumps from './Datadumps'


import TextField from '@material-ui/core/TextField';

import {useDispatch} from 'react-redux';
import newEntry from '../redux/actions';



const useStyles1 = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

//console.log(Datadumps['daily'])


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function DialogSelect() {
  const dispatch_redux = useDispatch();

  const initialState = {'timeframe':'', 'category':'', 'value':0, 'recurring':false}
  const [state, dispatch] = useReducer(reducer, initialState);

  const classes = useStyles();
  const classes1 = useStyles1();
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    setOpen(false)
    dispatch_redux(newEntry({'timeframe':state.timeframe, 
        'category':state.category,
        'value':parseInt(state.value),
        'recurring':state.recurring}));
    dispatch({type : 'SUBMIT'})
    //let temp = JSON.parse(localStorage.getItem('datadumps'))
    //temp[timeframe].push({'id':'', 'label':`${category}`, 'value':`${ruppee}` })
    //localStorage.setItem('datadumps', JSON.stringify(temp))
  }

  //React.useEffect(()=> )

  function reducer(state, action) {
    switch (action.type) {
      case 'TIMEFRAME':
        return {...state, 'timeframe': action.payload};
      case 'CATEGORY':
        return {...state, 'category': action.payload};
      case 'VALUE':
        return {...state, 'value': parseInt(action.payload)};
      case 'RECURRING':
        return {...state, 'recurring': !state.recurring};
      case 'SUBMIT':
        return {'timeframe' : '', 'category' : '', 'value' : 0, 'recurring': ''}
      default:
        throw new Error();
    }
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>Add Expense</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes1.root} style={{display:'flex', flexDirection:'column'}}>
            <FormControl className={classes.formControl} >
              <InputLabel id="demo-dialog-select-label">Timeframe</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={state.timeframe}
                onChange={(e) => dispatch({type : 'TIMEFRAME', payload : e.target.value })}
                input={<Input />}
              >
                <MenuItem value={'daily'}>Daily</MenuItem>
                <MenuItem value={'monthly'}>Monthly</MenuItem>
                <MenuItem value={'yearly'}>Yearly</MenuItem>
              </Select>
            </FormControl>
            <TextField id="standard-basic" onChange={(e) => dispatch({type: 'CATEGORY', payload : e.target.value})} label="Category" value={state.category} />
            <TextField id="standard-basic" onChange={(e) => dispatch({type: 'VALUE', payload : e.target.value})} label="Expense" value={state.value} />
            <FormControlLabel 
              control={
              <Checkbox
                checked={state.recurring}
                onChange={(e) => dispatch({type: 'RECURRING', payload : e.target.value})}
                name="recurring"
                color="primary"
              />
                }
              label="Recurring"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}