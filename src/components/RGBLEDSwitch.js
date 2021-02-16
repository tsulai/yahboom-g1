import React, {useState, useContext} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green, blue, red } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {useGETRGBLED} from './hooks/useCommon';
import {APIContext} from '../App'

const GreenSwitch = withStyles({
    switchBase: {
      color: green[800],
      '&$checked': {
        color: green[800],
      },
      '&$checked + $track': {
        backgroundColor: green[800],
      },
    },
    checked: {},
    track: {},
  })(Switch);

const BlueSwitch = withStyles({
    switchBase: {
      color: blue[800],
      '&$checked': {
        color: blue[800],
      },
      '&$checked + $track': {
        backgroundColor: blue[800],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const RedSwitch = withStyles({
    switchBase: {
      color: red[800],
      '&$checked': {
        color: red[800],
      },
      '&$checked + $track': {
        backgroundColor: red[800],
      },
    },
    checked: {},
    track: {},
  })(Switch);

function RGBLEDSwitch({color, name, label}) {
    const apiContext = useContext(APIContext) 
    const [state, setState] = useState({value: false, apiURL : ''})     
    
    useGETRGBLED(state, state.apiURL)

      const handleChange = (event) => { 
        if(event.target.name === 'r' && !event.target.checked) {
          setState({ 
            value: event.target.checked, 
            apiURL : apiContext.rgbLed_r_false   
           }) 
        }  
        else if(event.target.name === 'r' && event.target.checked) {
          setState({ 
            value: event.target.checked, 
            apiURL : apiContext.rgbLed_r_true  
           }) 
        } 
        if(event.target.name === 'g' && !event.target.checked) {
          setState({ 
            value: event.target.checked, 
            apiURL : apiContext.rgbLed_g_false   
           }) 
        }  
        else if(event.target.name === 'g' && event.target.checked) {
          setState({ 
            value: event.target.checked, 
            apiURL : apiContext.rgbLed_g_true  
           }) 
        }
        if(event.target.name === 'b' && !event.target.checked) {
          setState({ 
            value: event.target.checked, 
            apiURL : apiContext.rgbLed_b_false   
           }) 
        }  
        else if(event.target.name === 'b' && event.target.checked) {
          setState({ 
            value: event.target.checked, 
            apiURL : apiContext.rgbLed_b_true  
           }) 
        }      
        if(event.target.name === 'bl' && !event.target.checked) {
          setState({ 
            value: event.target.checked, 
            apiURL : apiContext.rgbLed_bl_false   
           }) 
        }  
        else if(event.target.name === 'bl' && event.target.checked) {
          setState({ 
            value: event.target.checked, 
            apiURL : apiContext.rgbLed_bl_true  
           }) 
        }      
      }

    return (
            <div>
              {
                color === 'red' &&
                    <FormControlLabel labelPlacement="end"
                    control={<RedSwitch checked={state.value} onChange={handleChange} name={name} />}
                    label={label}
                    />
                }
                {
                color === 'green' &&
                    <FormControlLabel labelPlacement="end"
                    control={<GreenSwitch checked={state.value} onChange={handleChange} name={name} />}
                    label={label}
                    />
                }
                {
                color === 'blue' &&
                    <FormControlLabel  labelPlacement="end"
                    control={<BlueSwitch color="primary" checked={state.value} onChange={handleChange} name={name} />}
                    label={label} 
                    />
                }{
                    color === '' &&
                    <FormControlLabel labelPlacement="end"
                    control={<Switch checked={state.value} onChange={handleChange} name={name} />}
                    label={label}
                    />  
                }
                
              </div>
    );
}

export default RGBLEDSwitch;