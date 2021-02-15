import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import {useGETServerMotor} from './hooks/useCommon';
import {APIContext} from '../App'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
    root: {       
      height: 250,
      paddingBottom: "20px",
      paddingRight: "0px",
    },
    root500:{
      height: 180,
      paddingBottom: "20px",
      paddingRight: "0px",
    }
  }))
  
  function valuetext(value) {
    return `${value}°`;
  }
  
  const marks = [
    {
      value: 0,
      label: 'Down',
    },    
    {
        value: 180,
        label: 'Up',
      },
    
  ];

function CamMotorSliderVertical(props) {
    const apiContext = React.useContext(APIContext) 
    const classes = useStyles();
    const [value, setValue] = useState(1)
    const matches = useMediaQuery('(min-width:500px)');

    useGETServerMotor(value,apiContext.s_Motor_v)

    const handleChange = (event, newValue) =>{
        setValue(newValue);
    }
    return (
        
            <React.Fragment>
              {matches?
                (<div className={classes.root}>
                    <Slider
                    value = {value}
                    orientation="vertical"
                    getAriaValueText={valuetext}
                    defaultValue={50}
                    aria-labelledby="vertical-slider"
                    max={180}
                    min={0}
                    marks={marks}
                    valueLabelDisplay="auto"
                    onChange = {handleChange}
                    />
                   
                </div>):(<div className={classes.root500}>
                    <Slider
                    value = {value}
                    orientation="vertical"
                    getAriaValueText={valuetext}
                    defaultValue={50}
                    aria-labelledby="vertical-slider"
                    max={180}
                    min={0}
                    marks={marks}
                    valueLabelDisplay="auto"
                    onChange = {handleChange}
                    />
                   
                </div>)
}
    </React.Fragment>
        
    );
}

export default CamMotorSliderVertical;