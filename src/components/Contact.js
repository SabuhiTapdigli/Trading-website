import React from 'react';
import styled from 'styled-components';
import concat from '../img/contact.svg'
import Title from './Title';


const Contact  = () =>{
    const Contact = true;
    const abtitle = 'Contact Us';
    return(
        <Container>
            <Title title = {abtitle} Contact ={Contact}/>
            <MainSection>
            <p>Looking for a free web hosting solution is an imperative decision. Try to identify a reliable web host can be a daunting task especially with so many service providers and options available nowadays.</p>
                <Mainbody>
                    
                    <Form >
                        <Label for ='name'>Your Name</Label>
                        <Input type='text' name = 'Your Name' placeholder = 'Jhon Doe' required></Input>
                        <Label for='email'>Email Address</Label>
                        <Input type='email' name = 'email' placeholder = 'example@domain.com' required></Input>
                        <Label for='subject'>Message</Label>
                        <Textarea name="subject" placeholder = 'Tell us breifly about your needs' required ></Textarea>
                        <Button type='submit'>Send</Button>

                    </Form>
                    <Concatimg>
                        <img src = {concat} alt = {'contact-us'}/>
                    </Concatimg>
                </Mainbody>
            </MainSection>
        </Container>
    )
}
const Button = styled.button`
    height: 46px;
    width: 207px;
    color:white;
    border:none;
    outline:none;
    border-radius: 3px;
    background: linear-gradient(267.34deg, #48E2E2 0%, #0A6BFF 99.92%);
    box-shadow: 0 5px 50px 0 rgba(106,169,216,0.7);
    font-size: 15px;
    font-weight: 900;
    letter-spacing: 0;
    line-height: 18px;
    text-align: center;
    text-shadow: 0 2px 20px 0 rgba(94,94,94,0.5);
`
const Form = styled.form`
    padding-top:40px;
    display:flex;
    flex-direction:column;
    width: 50%;
    @media(max-width:992px){
        width: 100%
    }
`
const Label = styled.label`
    color: #000000;
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 0;
    line-height: 19px;
    padding-top:15px;
`
const Input = styled.input`
    border:none;
    height:50px;
    width:100%;
    border-radius: 4px;
    background-color: #F3F3F3;
    ::placeholder{
        color: #BFBFBF;
        font-size: 14px;
        letter-spacing: 0;
        line-height: 19px;
        padding-top:20px;
        padding-left:20px;
    }
`
const Textarea = styled.textarea`
    border:none;
    height: 164px;
    width: 100%;
    border-radius: 4px;
    background-color: #F3F3F3;
    margin-bottom:35px;
    ::placeholder{
        color: #BFBFBF;
        font-size: 14px;
        letter-spacing: 0;
        line-height: 19px;
        padding-top:20px;
        padding-left:20px;
    }
`
const Concatimg = styled.div`
    height: 234px;
    width: 207px;
    text-align:center;
    margin-bottom: 65px;
    img{
        height:100%;
        width:100%;
        object-fit:cover;
    }
    @media(max-width:992px){
        display:none
    }
`

const Container = styled.div`
    
`
const Mainbody = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    
    
`
const MainSection = styled.div`
    border-radius: 8px;
    background-color: #FFFFFF;
    box-shadow: 0 0 40px 0 rgba(0,0,0,0.12);
    max-width:1200px;
    margin:auto;
    justify-content:space-between;
    padding: 70px;
    margin-top:-170px;
    border-bottom:1px solid rgba(2,23,34,0.08);
    padding-bottom:100px;
    @media(max-width:992px){
        margin-top:0px;
    }
`
export default Contact

