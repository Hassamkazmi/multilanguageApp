import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchAmbulance } from '../redux/ambulanceSlice'
import cookie from 'js-cookie'

const Services = () => {
    const dispatch = useDispatch();
    const {data : ambulances} = useSelector((state) => state.ambulance) || ''

    useEffect(() => {
        dispatch(fetchAmbulance());
    },[])

    
    console.log("Fetch Data",ambulances)

  return (
    <div>Services</div>
  )
}

export default Services