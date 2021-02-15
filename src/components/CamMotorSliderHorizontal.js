import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import {useGETServerMotor} from './hooks/useCommon';
import {APIContext} from '../App'

const useStyles = makeStyles((theme) => ({
    root: {
       
      width: 300,
    },
    margin: {
      height: theme.spacing(3),
    },
  }));
  
  const marks = [
    {
      value: 0,
      label: 'Left',
    },
    {
      value: 180,
      label: 'Right',
    }
  ];
  
  function valuetext(value) {
    return `${value}°`;
  }

function CamMotorSliderHorizontal(props) {
    const apiContext = React.useContext(APIContext) 
    const classes = useStyles();
    const [value, setValue] = useState(1)

    useGETServerMotor(value, apiContext.s_Motor_h)

    const handleChange = (event, newValue) =>{
        setValue(newValue);
    }
    return (
        <div className={classes.root}>
        <Slider
        value = {value}
            defaultValue={50}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-custom"
            max={180}
            min={0}
            valueLabelDisplay="auto"
            marks={marks}
            onChange = {handleChange}
        />
    </div>
    );
}

export default CamMotorSliderHorizontal;