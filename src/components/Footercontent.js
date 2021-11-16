import React from 'react';
import styled from 'styled-components';


const Footercontent = () =>{
    
    return(
        <Container>
            <Footertext>
            <p>Want to trade stocks? You’re going to need an online broker, and that broker should offer a reasonable investment minimum, high-quality trading tools, robust access to customer service and no hidden account fees. On these measures, the brokerage firms below earned their place on our list of the best online brokers for stock trading</p>
            <p>We evaluated brokerage firms and investment companies on the services that matter most to different types of investors. For example, for active traders, we've noted online brokers with low or no commissions and robust mobile trading platforms. For people venturing into investing for the first time, we've included the best online brokers for educational resources (including webinars, video tutorials and in-person seminars) and on-call chat or phone support. Read on to see our picks for the best brokers, alongside links to our investing experts' in-depth reviews on each.</p>
            </Footertext>
        </Container>
        
    )
}
const Container = styled.div `
    max-width:1200px;
    margin:auto;
    padding: 0 20px;
`
const Footertext = styled.div`
    color: #2B292D;
    padding-top:50px;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 2.5;
    margin-bottom:85px;

`
export default Footercontent