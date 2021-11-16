import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Sidebar from './Sidebar';
import Partner from './Partner';
import Footercontent from './Footercontent';
import { useParams } from 'react-router-dom';


const Reviewreview  = ({datas}) =>{
    const firsturl = datas.items[0];
    const {name} = useParams()
   
    return(
        <Container>
            <Title/>
            <MainSection>
                <Mainbody>
                    {datas.items.map((item)=>{
                        if(item.partnerName === name){
                            return(
                                <div>
                                    <Partner key = {item.id} item = {item} className='partner'/>
                                    <div dangerouslySetInnerHTML={{__html: item.review}}/>
                                </div>)
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
    max-width:1200px;
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
export default Reviewreview
