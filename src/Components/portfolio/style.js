import styled from "styled-components";

export const PortSec=styled.div` 
    background: #f8f8f8;
    padding-top: 20px; 
    overflow: hidden;
`

export const PortTitle=styled.h2` 
    text-align: center;
    font-size: 35px;
`

export const PortSpan=styled.span`
    font-weight: normal;
`

export const PortList=styled.ul` 
    list-style: none;
    text-align: center;
    margin: 20px 0;
`

export const PortItem=styled.li` 
    display: inline-block;
    width: 100px;
    padding: 10px;
    background-color:${props=>props.active?"orange":""};
    color:${props=>props.active?"#fff":""};
`


export const PortBoxDiv=styled.div`
    width: 25%;
    float: left;
    font-size: 0;
    position: relative;

    &:hover > div{
        opacity: 1;
    };
`

export const PortBoxImg=styled.img` 
    width: 100%;
`

export const PortBoxOverlay=styled.div` 
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0;
`

export const PortBoxOverlaySpan=styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid #eb5424;
`