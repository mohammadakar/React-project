import React,{Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Contact from './Components/Contact'
import Navbar from './Components/Navbar/index'
import Index from './Components/index';


class App extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' Component={Index}/>
        <Route path='/contact' Component={Contact}/>
        </Routes>

        </BrowserRouter>

      </div>
    )
  }
}

export default App