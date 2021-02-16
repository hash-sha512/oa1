import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import MyResponsivePie from './MyResponsivePie.js' ;

import Container from '@material-ui/core/Container';


export default function RadioButtonsGroup() {
    //state for graph's timeframe - defaults to daily
    //passed as prop to the graph component - MyResponsivePie
    const [value, setValue] = React.useState('daily');

    //state - display/hide chart/GUI
    const [displayChart, setDisplayChart] = React.useState(false); 

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <Container maxWidth="sm" > 
      <div >
      <Button style={{}} onClick={()=>setDisplayChart(!displayChart)}>GUI Toggle</Button>
      {displayChart && <div style={{display:'flex',  height:'60vh', border:'3px solid black'}}>
                          <>
                            <FormControl component="fieldset" style={{marginLeft:'6px'}}>
                              <RadioGroup aria-label="scale" name="scale" value={value} onChange={handleChange}>
                                <FormControlLabel value="daily" control={<Radio color="primary"/>} label="Daily" />
                                <FormControlLabel value="monthly" control={<Radio color="primary"/>} label="Monthly" />
                                <FormControlLabel value="yearly" control={<Radio color="primary"/>} label="Yearly" />
                              </RadioGroup>
                            </FormControl>
                          <MyResponsivePie scale={value} style={{}} /> 
                          </>
                        </div>
      }
      </div>
      </Container>
    );
  }