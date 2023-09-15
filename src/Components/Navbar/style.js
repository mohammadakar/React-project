import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarSection=styled.div`
padding: 20px 0;
overflow: hidden;
background: #fff;
position: relative;
border-bottom: 1px solid #000
`
export const Container=styled.div`
width: 85%;
margin: auto;
`
export const Logo=styled.div`
    width: 50%;
    float: left;
`
export const LogoImg=styled.img`
border-radius:50%;

width:200px;

`



export const UlList=styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    padding: 0;
    margin-top:30px;
`

export const ListItem=styled.li`
    display: inline-block;
`

export const Lists=styled.a`
display: block;
color: #222;
text-decoration: none;
padding: 10px 15px;
font-weight: bold;

&:hover{
    color:green;
}
`
export const Links=styled(Link)`
display: block;
color: #222;
text-decoration: none;
padding: 10px 15px;
font-weight: bold;

&:hover{
    color:green;
}
`
