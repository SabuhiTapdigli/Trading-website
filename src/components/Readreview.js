import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Sidebar from './Sidebar';
import Partner from './Partner';
import Footercontent from './Footercontent';
import { useParams } from 'react-router-dom';


const Reviewreview  = ({datas}) =>{
    const title = 'Top 10 Best Online Trading Brokers';
    const parag = `<h3>We listed the best trading brokers in the market</h3><br>
                    <ul>
                    <li>High-quality trading platform and tools</li>
                    <li>Excellent customer service</li>
                    <li>No hidden fees</li>
                    </ul>`
    const firsturl = datas.items[0];
    const {name} = useParams()
   
    return(
        <Container>
            <Title title = {title} parag = {parag}/>
            <MainSection>
                <Mainbody>
                    {datas.items.map((item)=>{
                        if(item.partnerName === name){
                            return(
                                <ReviewContent>
                                    <Partner key = {item.id} item = {item} className='partner'/>
                                    <div dangerouslySetInnerHTML={{__html: item.review}}/>
                                </ReviewContent>)
                        }
                        return(null)
                    })}
                </Mainbody>
                <Sidebar articles = {datas.articles} firsturl={firsturl}/>
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
        margin-top:20px;
    }
`
const ReviewContent= styled.div`
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 12%) 0px 0px 40px 0px;
    padding: 20px;
`
export default Reviewreview
