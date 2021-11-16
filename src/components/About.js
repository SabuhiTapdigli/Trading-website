import React from 'react';
import styled from 'styled-components';
import Title from './Title';


const About  = () =>{
    const Contact = true;
    const abtitle = 'About Us';
    
    return(
        <Container>
            <Title title = {abtitle} Contact ={Contact}/>
            <MainSection>
                <Mainbody>
                <h2>About Us</h2>
                            <p>We are a web hosting comparison site that offers users top performing hosting providers in the industry. Our mission is to make decisions easier for users by helping them choose from the best options available. </p>
                            <p> We compare hosting companies based on pricing, performance, resources, and other services provided by them. We rank them according to the overall score for each provider that is calculated considering the above factors. We aim to give you quality web hosting options and an easy comparison interface that will make it easier for you to launch your website. Choosing a hosting service can look easy, but elaborate the options we provided for you and try to identify one that best suits your needs.</p>
                </Mainbody>
            </MainSection>
        </Container>
    )
}
const Container = styled.div`
    
`
const Mainbody = styled.div`
   
    flex-direction:column;
    flex:0.78;
    
`
const MainSection = styled.div`
    
    max-width:1200px;
    margin:auto;
    justify-content:space-between;
    padding: 0 20px;
    margin-top:30px;
    border-bottom:1px solid rgba(2,23,34,0.08);
    padding-bottom:100px;
`
export default About

