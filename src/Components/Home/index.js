import React from 'react';
import './style.js'
import { Container, HomeBtn, HomeDisc, HomeInfo, HomeInformation, HomeSec, HomeTitle, Span1 } from './style.js';


const Home=()=>{
    return(

    <HomeSec>
        <Container>
            <HomeInformation>
                <HomeTitle>Mohammad akar</HomeTitle>
                <HomeInfo>Web Developer</HomeInfo>
                <HomeDisc>
                    Iam a professional <Span1>UX Designer</Span1> and Full-Stack Web developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </HomeDisc>
                <HomeBtn>Let's Begin</HomeBtn>
            </HomeInformation>
        </Container>
    </HomeSec>
    )
}

export default Home