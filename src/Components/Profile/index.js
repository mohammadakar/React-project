import React,{Component} from 'react';
import './style.js'
import { Container, MyProfile, MySkills, ProfSkills, ProfileItem, ProfileList, ProfileSpan, Skillsdesc,ProfTitle, SkillsTitle, SkillsBar, SkillTit, SkillParent, SkillPercentage, GlobalSpan, ParentSpan } from './style.js';
import axios from 'axios';

class Profile extends Component{
    state={
        skills:[]
    }
    componentDidMount(){
        axios.get("js/data.json").then(res=>{
            this.setState({
                skills:res.data.skills
            })
        })
    }
    render(){
        const skills=this.state.skills
        const OverAll=skills.map(skill=>{
            return(
                <SkillsBar key={skill.id}>
                        <SkillTit>{skill.skillName}</SkillTit>
                        <SkillPercentage>{skill.skillPercentage}</SkillPercentage>
                        <SkillParent>
                            <ParentSpan className={skill.className}></ParentSpan>
                        </SkillParent>
                </SkillsBar>
            )

        })
        return(
        <ProfSkills>
            <Container>
                <MyProfile>
                    <ProfTitle><GlobalSpan>My </GlobalSpan>Profile</ProfTitle>
                    <ProfileList>
                        <ProfileItem>
                            <ProfileSpan>Name</ProfileSpan>
                            Mohammad Akar
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Birthday</ProfileSpan>
                            26-3-2002
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Address</ProfileSpan>
                            Beirut, Lebanon
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Phone</ProfileSpan>
                            96176058787
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Email</ProfileSpan>
                            MoeAkar123456@gmail.com
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Website</ProfileSpan>
                            <ProfileSpan className="web"><a href='https://github.com/mohammadakar/portfolio'>MyPortfolio</a></ProfileSpan>
                        </ProfileItem>
                    </ProfileList>
                </MyProfile>
                
                <MySkills>
                    <SkillsTitle>Some <GlobalSpan>skills</GlobalSpan></SkillsTitle>
                    <Skillsdesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </Skillsdesc>
                    
                    {OverAll}
                </MySkills>
                
            </Container>
        </ProfSkills>
        )
    }
}
export default Profile