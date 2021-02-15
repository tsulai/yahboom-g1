import {useState, useEffect} from 'react';
import axios from 'axios'

function useCommon(props) {
    //reserved
}

export function useGETServerMotor(value,api) {    
    const [status, setStatus] = useState([])
    useEffect(()=>{
        if(api !== null){
           // console.log('GET server motor request')
            axios.get(`${api}${value}`)
            .then(res => {
                setStatus(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }

    },[value])
}


export function useGETDriverMotor(value, api) {
    const [status, setStatus] = useState([])

    const handleDirection = () =>{
      // console.log('GET driver motor request')
        axios.get(`${api}${value}`)
        .then(res => {
            setStatus(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
     return [handleDirection]   
   
}

export function useGETRGBLED(value,api) {
    const [status, setStatus] = useState([])

    useEffect(()=>{
      // console.log('GET LED request')
        axios.get(`${api}`)
        .then(res => {
            setStatus(res.data)
        })
        .catch(err=>{
            console.log(err)
        })

    },[value])
}

export default useCommon;