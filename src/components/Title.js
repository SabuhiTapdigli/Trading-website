import React from 'react';
import styled from 'styled-components';
import bg from '../img/bg-home.png';
import broker from '../img/broker-icon.svg'
import tick from '../img/tick.svg';
import useGaEventTracker from '../hooks/useGaEventTracker';



const Title = ({title,parag,Contact,firsturl}) => {
    const GaEventTracker = useGaEventTracker('Title check button')
    const today = new Date(),
    date = today.getDate() + ' ' + today.toLocaleString('en-us', { month: 'short' }) + ', ' + today.getFullYear();
    const gclid = sessionStorage.getItem('gclid')
    return (
            <BgWrapper>
                <Container>
                    <Headerwrapper>
                        <Currentime><div><span><img src = {tick} alt = {'tick'} height='16' width ='16'/></span> Last Updated {date}</div></Currentime>
                        <TitleHeader>{title}</TitleHeader>
                        <TtileContent>
                        <div dangerouslySetInnerHTML={{__html: parag}}/>
                        </TtileContent>
                        {/* {!Contact && <CheckButton href={`${firsturl+gclid}`} target='_blank' rel="noreferrer" onClick={(e) =>GaEventTracker('Main page check btn clicked',firsturl+gclid)}>Check</CheckButton>} */}
                    </Headerwrapper>
                    <Flagicon><img src={broker} alt={'broker'}/></Flagicon>
                </Container>
            </BgWrapper>
        
    )
}
const BgWrapper = styled.div`
    // background-image: url(${bg});
    background-color:#f8f8fb;
    height:450px;
    background-size:cover;
    @media(max-width:992px){
        height: 180px;
    }
    
`
const Flagicon = styled.div`

`

const Container = styled.div`
    max-width:1100px;
    margin:auto;
    padding: 0 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;

    `
const Currentime = styled.div`
    color: black;
    font-family: 'Avenir';
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 26px;  
    div{
        text-align:center;
        width: 226px;
        border-radius: 5px;
        background-color: rgba(255,255,255,0.1);
        padding:5px 0;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    span{
        display:flex;
        margin-right:7px;
    }
    padding:20px 0;
   
`
const TitleHeader = styled.h1`
    color: black;
    font-family: 'Avenir';
    font-size: 33px;
    font-weight: 900;
    letter-spacing: 0;
    padding:10px 0;
    @media(max-width:992px){
        font-size: 18px;
    }
`
const TtileContent = styled.div`
    color: black;
    font-family: Avenir;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 26px;
    padding-top:20px;
    padding-bottom:60px;
    padding-left:20px;
    @media(max-width:992px){
        display:none
    }
`
const CheckButton = styled.a`
    padding: 15px;
    width: 207px;
    border-radius: 3px;
    background: linear-gradient(267.34deg, #48E2E2 0%, #0A6BFF 99.92%);
    box-shadow: 0 5px 50px 0 rgba(106,169,216,0.7);
    color: #FFFFFF;
    outline:none;
    border:none;
    cursor:pointer;
    text-decoration:none;
    color:white;
    display:block;
    text-align:center;
    text-transform: uppercase;
    font-weight: bold;
    @media(max-width:992px){
        display:none
    }



`
const Headerwrapper = styled.div`
    padding:20px 0;
    width:80%;
    @media(max-width:992px){
        width:100%
    }

`
export default Title
