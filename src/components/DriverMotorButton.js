import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {useGETDriverMotor} from './hooks/useCommon';
import {APIContext} from '../App'

function DriverMotorButton({type}) {    
    const apiContext = React.useContext(APIContext) 
    const getAPIURLByType = () =>{
        if (type === 'f'){
            return apiContext.d_Motor_f
        }
        else if (type === 's_l'){
            return apiContext.d_Motor_s_l
        }
        else if (type === 's_r'){
            return apiContext.d_Motor_s_r
        }
        else if (type === 'b'){
            return apiContext.d_Motor_b
        }
    }
    const [handleDirection] = useGETDriverMotor(30,getAPIURLByType())
    

    return (
        <div>
            { type === 'f' &&
            <IconButton aria-label="delete" style={{padding: "0"}} size="medium" onClick={handleDirection}>
                <ArrowUpwardIcon fontSize="large" />
            </IconButton>
            }
            { type === 's_l' &&
            <IconButton aria-label="delete" style={{padding: "0 12px"}} size="medium" onClick={handleDirection}>
                <ArrowBackIcon fontSize="large"  />
            </IconButton>
            }
            { type === 's_r' &&
            <IconButton aria-label="delete" style={{padding: "0 12px"}} size="medium" onClick={handleDirection}> 
                <ArrowForwardIcon fontSize="large"  />
            </IconButton>
            }
            { type === 'b' &&
            <IconButton aria-label="delete" size="medium"  style={{padding: "0"}} onClick={handleDirection}>
                <ArrowDownwardIcon fontSize="large"  />
            </IconButton>
            }
            
        </div>
    );
}

export default DriverMotorButton;