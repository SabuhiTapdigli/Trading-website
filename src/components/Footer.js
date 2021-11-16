import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';
import {Link} from  'react-router-dom'
const Footer = () =>{
    return(
        <FooterSection>
            <Container>
                <Logo>
                <Link to='/'><img src = {logo} alt = 'Top 10 Web Hosting' height='64' width ='195'/></Link>
                    <span>All Right Reserved &#169; 2021</span>
                </Logo>
                <Footerwrapper>
                    <FooterLinks>
                        <li><Link to='/'>Top Online Brokers</Link></li>
                        {/* <li><Link to='/reviews'>Reviews</Link></li>
                        <li><Link to='/articles'>Articles</Link></li> */}
                        {/* <li><Link to='/contact-us'>Contact Us</Link></li>
                        <li><Link to='/about'>About Us</Link></li> */}
                    </FooterLinks>
                    <Description>
                    findonlinebrokerforyou.com is not a registered broker, analyst, or investment advisor. We commit to provide useful information for our users to choose the online broker. We may receive compensation when you click on links to products we reviewed. 

The information contained on this website is provided for educational purposes, and does not constitute investment advice. There is a high degree of risk involved in trading securities. Trading in any type of financial product including forex, CFDs, stocks, and cryptocurrencies. This risk is higher with Cryptocurrencies due to markets being decentralized and non-regulated. You should be aware that you may lose a significant portion of your portfolio. findonlinebrokerforyou.com is not a registered broker, analyst, or investment advisor.

                    </Description>
                </Footerwrapper>
            </Container>
        </FooterSection>
    )
}
const Container = styled.div`
    max-width:1200px;
    margin:auto;
    padding: 0 20px;
    color: #FFFFFF;
    display:flex;
    justify-content:space-between;

`
const FooterSection = styled.div`
    background-color:black;
`
const Logo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding-top: 30px;
    flex:0.2;
    span{
        display:block;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0;
        padding: 50px 0;
    }
    @media(max-width:992px){
        span{
            padding: 20px 0;
        }
    }
`
const Footerwrapper = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    flex: 0.7;
    @media(max-width:992px){
        display:none;
    }
`
const FooterLinks = styled.ul`
    list-style:none;
    display:flex;
    padding-top: 30px;
    a{
        text-decoration:none;
        color:white;
        cursor:pointer;
    }
    li{
        font-size: 15px;
        font-weight: 300;
        letter-spacing: 0;
        line-height: 20px;
        text-align: right;
        margin-right:25px;
    }
    @media(max-width:992px){
        display:none;
    }
`
const Description = styled.p`
    color: #9D9D9D;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 19px;
    padding: 50px 0;
    @media(max-width:992px){
        display:none;
    }
`

export default Footer