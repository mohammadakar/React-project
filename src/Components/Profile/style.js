import styled from "styled-components";


export const ProfSkills=styled.div`
padding: 50px 0;
overflow: hidden;
`
export const Container=styled.div`
width: 85%;
margin: auto;
`
export const GlobalSpan=styled.span`
font-weight: normal;
`

export const MyProfile=styled.div`
width: 50%;
float: left;
`
export const ProfTitle=styled.h2`
font-size: 40px; 
margin-bottom: 20px;
`

export const ProfileList=styled.ul`
list-style: none;
`
export const ProfileItem=styled.li`
margin-bottom: 8px;
`
export const ProfileSpan=styled.span`
display: inline-block;
width: 100px;
font-weight: bold;
font-weight:${props=>props.className==="web"?"normal":''}
color:${props=>props.className==="web"?"#eb5424":''}
`
export const MySkills=styled.div`
width: 50%;
float: left;
`
export const SkillsTitle=styled.h2`
font-size: 40px; 
margin-bottom: 20px;
`
export const Skillsdesc=styled.p`
font-size: 15px;
color: #888;
line-height: 1.5;
margin-bottom: 20px;
`

export const SkillsBar=styled.div`
overflow: hidden;
padding: 10px 0;
margin-bottom: 10px;
`
export const SkillTit=styled.span`
float: left;
`

export const SkillPercentage=styled.span`
float: right;
margin-right: 100px
`
export const SkillParent=styled.div`
height: 2px;
clear: both;
background: #f8f8f8;
position: relative;
top: 5px;
`

export const ParentSpan=styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;

    width:${props=>props.className==="sp1"?"100%":''}
    width:${props=>props.className==="sp2"?"90%":''}
    width:${props=>props.className==="sp3"?"80%":''}
`