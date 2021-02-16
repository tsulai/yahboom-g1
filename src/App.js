import React, { useReducer, useEffect} from 'react'
import './App.css';
import Grid from '@material-ui/core/Grid';
import ScreenView from './components/ScreenView';
import CamMotorSliderVertical from './components/CamMotorSliderVertical';
import CamMotorSliderHorizontal from './components/CamMotorSliderHorizontal';
import RGBLEDSwitchGrp from './components/RGBLEDSwitchGrp';
import DriverMotorButtonGrp from './components/DriverMotorButtonGrp';
import axios from 'axios'

export const APIContext = React.createContext()

const initialState = {
  apiData: [],
  error: ''
}
const reducer = (state, action) => {
  switch(action.type){
    case 'FETCH_SUCCESS':
      return {
        ...state, apiData: action.payload      
      }
      case 'FETCH_ERROR':
        return {
          apiData: [],
          error: 'Something Went Wrong!'
        }
      default: 
        return state
  } 
}

function App() {
  const [apiDataState, dispatch] = useReducer(reducer, initialState)

  useEffect(() =>{
    axios.get('http://localhost/yahboomg1.api/config-api.json')
    .then(
        response => {
          dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        }
    )
    .catch(error => {
        dispatch ({type: 'FETCH_ERROR'})
    })
    },[])
    //console.log('========= global state ==============');
    //console.log(apiDataState);
    //console.log('========= global state - apiData video ==============');
    //console.log((apiDataState.apiData[0]?apiDataState.apiData[0].video : null));
  return (
    
    <APIContext.Provider value=
      {{
      video:(apiDataState.apiData[0]?apiDataState.apiData[0].video : null), 
      s_Motor_v: (apiDataState.apiData[0]?apiDataState.apiData[0].s_Motor["v"] : null),
      s_Motor_h: (apiDataState.apiData[0]?apiDataState.apiData[0].s_Motor["h"] : null),
      d_Motor_f: (apiDataState.apiData[0]?apiDataState.apiData[0].d_Motor["f"] : null),
      d_Motor_b: (apiDataState.apiData[0]?apiDataState.apiData[0].d_Motor["b"] : null),
      d_Motor_s_l: (apiDataState.apiData[0]?apiDataState.apiData[0].d_Motor["s_l"] : null),
      d_Motor_s_r: (apiDataState.apiData[0]?apiDataState.apiData[0].d_Motor["s_r"] : null),
      rgbLed_r_true: (apiDataState.apiData[0]?apiDataState.apiData[0].rgbLed["r_true"] : null),
      rgbLed_r_false: (apiDataState.apiData[0]?apiDataState.apiData[0].rgbLed["r_false"] : null),
      rgbLed_g_true: (apiDataState.apiData[0]?apiDataState.apiData[0].rgbLed["g_true"] : null),
      rgbLed_g_false: (apiDataState.apiData[0]?apiDataState.apiData[0].rgbLed["g_false"] : null),
      rgbLed_b_true: (apiDataState.apiData[0]?apiDataState.apiData[0].rgbLed["b_true"] : null),
      rgbLed_b_false: (apiDataState.apiData[0]?apiDataState.apiData[0].rgbLed["b_false"] : null),
      rgbLed_bl_true: (apiDataState.apiData[0]?apiDataState.apiData[0].rgbLed["bl_true"] : null),
      rgbLed_bl_false: (apiDataState.apiData[0]?apiDataState.apiData[0].rgbLed["bl_false"] : null),
      }}>
    
    <div className="App Border" >
      <h4>Yahboom G1 Robot</h4>      
        <Grid container spacing={0} >
          <Grid className="Border" item xs={1}  >
            <CamMotorSliderVertical />
          </Grid>
          <Grid style={{marginLeft: "15px"}} className="Border" item xs={10} sm={8} lg={5} > 
            <ScreenView />
            <CamMotorSliderHorizontal />
          </Grid>
          <Grid container spacing={0}  item xs >
            <Grid className="Border" style={{textAlign: "left", marginLeft: "15px"}}  item xs sm md={8} lg={8} >
              <RGBLEDSwitchGrp />
            </Grid>
            <Grid className="Border" item xs sm md={8}  lg={8} >
              <DriverMotorButtonGrp />
            </Grid>  
          </Grid>
        </Grid>   
    </div>
    
    </APIContext.Provider>
  );
}

export default App;
