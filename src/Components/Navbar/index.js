import React from 'react';
import { Link} from 'react-router-dom';
import { ListItem, Lists, Logo, UlList,NavbarSection,Container, Links, LogoImg } from './style.js';


const Navbar=()=>{
    return(
    <NavbarSection>
            
            <Container>
                
                <Logo>
                    <LogoImg src='https://cdn.logo.com/hotlink-ok/logo-social.png' />
                </Logo>
                
                
                <UlList>
                    <ListItem><Links to='/'>Home</Links></ListItem>
                    <ListItem ><Lists href="#">Work</Lists></ListItem>
                    <ListItem ><Lists href="#">Portfolio</Lists></ListItem>
                    <ListItem ><Lists href="#">Resume</Lists></ListItem>
                    <ListItem ><Lists href="#">About</Lists></ListItem>
                    <ListItem ><Links to='/contact'>Contact</Links></ListItem>
                </UlList>
                
            </Container> 
    </NavbarSection>
    )
}

export default Navbar