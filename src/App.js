import React from 'react'
import './App.css'
import Section from './Components/Section'
import Gallery from './Components/Gallery';
import Header from './Components/Header';
import Data from './Components/Data';
import Services from './Components/Services';
import store from './redux/store'
import {Provider} from 'react-redux'
export default function App() {
  return (
    <div className="container">
      <Provider store={store}>
      <Header/>
      <Section/>
      <Data/>
      {/* <Services/> */}
      <Gallery/>
      </Provider>
    </div>
  )
}
