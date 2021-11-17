import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import Partner from '../Partner';
import Sidebar from '../Sidebar';
import Footercontent from '../Footercontent'
import useApi from '../../hooks/useApi'
const Stock = () =>{
    const datas = useApi('/stocks/');
    const title = 'Top 10 Best Stock Trading Brokers In UK';
    const parag = `<h3>We listed the best stock brokers in the market</h3><br>
                    <ul>
                    <li>High-quality trading platform and tools</li>
                    <li>Excellent customer service</li>
                    <li>No hidden fees</li>
                    </ul>`
    const firsturl = datas.items[0];
    
    return(
        <Container>
            <Title title = {title} parag = {parag} firsturl={firsturl && firsturl.url}/>
            <MainSection>
                <Mainbody>
                    {datas.items.map((item)=>{
                        return(<Partner key = {item.id} item = {item} className='partner'/>)
                    }) }
                </Mainbody>
                <Sidebar articles = {datas.articles} firsturl={firsturl} />
            </MainSection>
            <Footercontent/>
        </Container>
    )
}
const Container = styled.div`
    // height: calc( 100vh - 60px);
    // padding : 0 calc(10vw + 5px);
`
const Mainbody = styled.div`
    display:flex;
    flex-direction:column;
    flex:0.78;
    @media(max-width:992px){
        flex:1;
    }
    
`
const MainSection = styled.div`
    display:flex;
    max-width:1100px;
    margin:auto;
    justify-content:space-between;
    padding: 0 20px;
    margin-top:-40px;
    border-bottom:1px solid rgba(2,23,34,0.08);
    padding-bottom:100px;
    @media(max-width:992px){
        margin-top:0;
    }

`
export default Stock