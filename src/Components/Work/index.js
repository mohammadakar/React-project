import React ,{Component}from 'react';
import axios from 'axios';
import{WorkDisk ,WorkPart,WorkLine,Icon,PartTitle,WorkSec,WorkSpan,Container, WorkTitle} from './style.js'



class Work extends Component{
    

        state = {
            works:[]
        }
        componentDidMount(){
            axios.get("js/data.json").then(res=>{
                this.setState({
                    works:res.data.works
                })
            })
        }
        render(){

        const works=this.state.works
        const workslist=works.map(workItem=>{
            return(
                <WorkPart first={workItem.id} key={workItem.id}>
                    <Icon className={workItem.icon_name}></Icon>
                    <PartTitle >{workItem.title}</PartTitle>
                    <WorkLine/>
                    <WorkDisk>
                        {workItem.body}
                    </WorkDisk>
                </WorkPart>
            )
        })

        return(
        <WorkSec>
            <Container>
                <WorkTitle><WorkSpan>My</WorkSpan> Work</WorkTitle>
                {workslist}
                
            </Container>
        </WorkSec>
        )
    
    }
}

export default Work