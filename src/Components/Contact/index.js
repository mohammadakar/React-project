import React from 'react';
import './style.js'
import { ContactSec, ContactTitle, Container, FormInput, InputEmail, InputSub, InputSubmit, InputText, Span, Textarea } from './style.js';
import Footer from './../Footer'


const Contact=()=>{
    return(
        <React.Fragment>
    <ContactSec>
        <Container>
            <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
            <form action="">
                <FormInput>
                    <InputText type="text" placeholder="Your Name" />
                    <InputEmail type="email" placeholder="Your Email" />
                </FormInput>
                <InputSub type="text" className="sub" placeholder="Your Subject" />
                <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                <InputSubmit type="submit" value="Send Message" />
            </form>
        </Container>
    </ContactSec>
    <Footer />
    </React.Fragment>
    )
}

export default Contact