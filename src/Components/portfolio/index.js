import React ,{useState , useEffect}from "react";
import {PortBoxDiv, PortBoxImg, PortBoxOverlay, PortBoxOverlaySpan, PortItem, PortList, PortSec, PortSpan, PortTitle} from "./style"
import axios from "axios";
const Portfolio=()=>{


    
    const [images , setImages]=useState([])

    useEffect(()=>{
        axios.get('js/data.json').then(res=>{setImages(res.data.portfolio)})

    },[])

    const portImages=images.map(img=>{
        return(
            <PortBoxDiv key={img.id}>
                    <PortBoxImg src={img.image} alt="" />
                    <PortBoxOverlay>
                        <PortBoxOverlaySpan>
                            Show Image
                        </PortBoxOverlaySpan>
                    </PortBoxOverlay>
                </PortBoxDiv>
        )

    })

    return(
        
        <PortSec>
            <PortTitle><PortSpan>My</PortSpan> Portfolio</PortTitle>
            <PortList>
                <PortItem active>All</PortItem>
                <PortItem>HTML</PortItem>
                <PortItem>Photoshop</PortItem>
                <PortItem>Wordpress</PortItem>
                <PortItem>Mobile</PortItem>
            </PortList>
            
            <div className="box">
                {portImages}
                
            </div>
        </PortSec>

    )
}
export default Portfolio