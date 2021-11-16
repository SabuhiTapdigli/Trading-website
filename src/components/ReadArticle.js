import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Sidebar from './Sidebar';
import Footercontent from './Footercontent';
import { useParams } from 'react-router-dom';


const ReadArticle  = ({datas}) =>{
    // const imgUrl = '../img/articles/'
    const {name} = useParams();
    const firsturl = datas.items[0];
    return(
        <Container>
            <Title/>
            <MainSection>
                <Mainbody>

                {datas.articles.map((item)=>{
                        if(item.name === name){
                            return(
                                <div key={item.id}>
                                    <h1>{item.name}</h1>
                                    <span>07 July, 2021</span>
                                    {/* <img src = {`${imgUrl}${item.imgUrl}`} alt = {item.name} /> */}
                                    <div dangerouslySetInnerHTML={{__html: item.text}}/>
                                </div>
                                )
                        }
                        return(null);
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
    border-radius: 8px;
    background-color: #FFFFFF;
    box-shadow: 0 0 40px 0 rgba(0,0,0,0.12);
    div{
        width: 736px;
        height:100%;
        margin:auto;
    }
    img{
        width:100%
    }
    h1{
        padding-top:30px;
    }
    span{
        display:block;
        padding:20px 0;
    }
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
export default ReadArticle
