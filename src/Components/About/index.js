import React from 'react';
import './style'
import { AboutImg, AboutInfo, AboutSec, Container, InfoDir, InfoDisc, InfoDiscA, InfoSpan, InfoTitle } from './style';



const About=()=>{
    return(
    
    <AboutSec>
            <Container>
                <AboutInfo>
                    <InfoTitle><InfoSpan>This is</InfoSpan> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDisc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoDiscA href="#">explicabo</InfoDiscA> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDisc>
                
                </AboutInfo>
                
            </Container>
    </AboutSec>
    )
    
}

export default About