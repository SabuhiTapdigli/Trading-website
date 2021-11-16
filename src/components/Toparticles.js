import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Toparticles = ({item}) =>{
    const imgUrl = '../img/articles/'
    return(
        
            <Article>
                <ArticleWrapper>
                    <ArticleImg>
                        <img src = {`${imgUrl}${item.imgUrl}`} alt = {item.name}/>
                    </ArticleImg>
                    <AritcleContent>
                        {/* <p>{item.name}</p> */}
                        <Link to = {`/article/${item.name}`}>Read More {item.name}</Link>
                    </AritcleContent>
                </ArticleWrapper>
            </Article>
       
        
    )
}
const ArticleWrapper = styled.div `
    display:flex;
    justify-content:space-between;
    border-bottom: 1px solid rgba(2,23,34,0.08);
    padding-bottom:15px;
    padding-top:15px;

`
const Article = styled.div`
    border:none;
    background-color: #F3F3F3;
    padding:0 20px;
    width:100%;
    
    
`
const ArticleImg = styled.div`
    flex:0.5;
    height: 92px;
    width: 92px;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

`
const AritcleContent = styled.div`
    flex:0.45;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    p{
        font-size: 14px;
        font-weight: 300;
        letter-spacing: 0;
        line-height: 17px;
    }
    a{
        color: #031ee8;
        font-family: Avenir;
        font-size: 14px;
        letter-spacing: 0;
        line-height: 19px;
        text-decoration:none;
    }

`
export default Toparticles;