import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import RGBLEDSwitch from './RGBLEDSwitch';



function RGBLEDSwitchGrp(props) {  
    return (
        <FormControl component="fieldset">
            <FormGroup>
                <RGBLEDSwitch color="red" name="r" label="Red" />
                <RGBLEDSwitch color="green" name="g" label="Green" />
                <RGBLEDSwitch color="blue" name="b" label="Blue" />
                <RGBLEDSwitch color="" name="bl" label="Blink" />
            </FormGroup> 
      <FormHelperText></FormHelperText>
    </FormControl>
    );
}

export default RGBLEDSwitchGrp;