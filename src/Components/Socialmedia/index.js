import React,{Component} from 'react';
import './style.js'
import { InfoSpan, Social, SocialDisc, SocialIcon, SocialSec, Span } from './style.js';
import axios from 'axios';



class Socialmedia extends Component{
    state={
        social:[]
    }
    componentDidMount(){
        axios.get('js/data.json').then(res=>this.setState({
            social:res.data.social
        }))
    }

    render(){
        const social=this.state.social;
        const allSocial=social.map(social=>{
        return(
            <Social item={social.id} key={social.id}>
            <SocialIcon className={social.icon}></SocialIcon>
            <SocialDisc>
                <Span >{social.title}</Span>
                <InfoSpan>{social.body}</InfoSpan>
            </SocialDisc>
        </Social>
        )
        })
    return(
    <SocialSec>
            {allSocial}
    
    </SocialSec>
    )
    }
}

export default Socialmedia