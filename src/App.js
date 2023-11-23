import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import Spinner from './components/Spinner';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        
    <Router>
    <Navbar/>

<Routes>

<Route path='/' element ={<News key="General" pageSize={5} country="in" category= "General"/>}></Route> 

<Route path='/Business' element= {<News key="Business" pageSize={5} country="in" category= "Buisness"/>}></Route>

<Route path='/Entertainment' element= {<News key="Entertainment" pageSize={5} country="in" category="Entertainment"/>} ></Route>

<Route path='/General' element={<News key="General" pageSize={5} country="in" category="General"/>} ></Route>

<Route path='Health' element={<News key='Health' pageSize={5} country="in" category="Health"/>} ></Route>

<Route path='Science' element={<News key='Science' pageSize={5} country="in" category="Science"/>} ></Route>

<Route path='Sports' element={<News key='Sports' pageSize={5} country="in" category="Sports"/>} ></Route>

<Route path='Technology' element={<News key="Technology" pageSize={5} country="in" category="Technology"/>} ></Route>

</Routes>


    </Router>

        
        {/* <News pageSize={5} country='in' category="general"/> */}
      
      </div>
    )
  }
}
