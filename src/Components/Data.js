import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchService} from '../redux/serviceSlice'
import cookie from 'js-cookie'
import { STATUSES } from '../redux/serviceSlice'

const Data = () => {
  const dispatch = useDispatch();
  const {data : services,status} = useSelector((state) => state.service)
  const cookieData = cookie.get('i18next')
  useEffect(() => {
    dispatch(fetchService())
  },[])

  if(status === STATUSES.LOADING){
    return <h1 data-text="Loading...">Loading...</h1>
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
}

console.log("Data service",services)
  return (
    <>
    {
      services.map((item) => {
        return(
          <div key={item._id}>
            <h3>{cookieData === 'en'? item.CardTitle : item.CardTitlear}</h3>
            <p>{cookieData === "en" ? item.CardDescriptions : item.CardDescriptionsar}</p>
          </div>
        )
      })
    }
    </>
  )
}

export default Data