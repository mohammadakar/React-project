import React,{Component} from 'react';

import Home from './../Home'
import About from './../About'
import Footer from './../Footer'
import Profile from './../Profile'
import Portfolio from './../portfolio'
import Work from './../Work'
import Socialmedia from './../Socialmedia'


class Index extends Component{
render(){
    return(
    <div>
        
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <Socialmedia />
        <Footer />

    </div>
    )
}
}

export default Index