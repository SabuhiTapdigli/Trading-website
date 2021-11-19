import React from 'react';
import styled from 'styled-components';
import eye from '../img/eye.svg'
// import banner from '../img/kamatera.svg';
import Toparticles from './Toparticles';
import {Link,useLocation} from 'react-router-dom'
import useGaEventTracker from '../hooks/useGaEventTracker';
import Visitorcount from './visitor-count/Visitorcount';

const Sidebar = ({articles,firsturl}) =>{
    // const imgUrl = '../img/logos/';
    const GaEventTracker = useGaEventTracker('Sidebar link')
    const gclid = sessionStorage.getItem('gclid')
    // for img
    const path = useLocation().pathname;
    const location = path.split("/")[1];
   
    return(
        <SidebarContainer>
            <Sidebartop>
                <span>350,060 + </span>
                {/* <Visitorcount/> */}
                <div>
                <p>Visited website today</p> <span><img src = {eye} alt = {'eye'} width="73" height="73"/></span>
                </div>
            </Sidebartop>
            <Sidebarbottom style={{backgroundImage: `url(../img/${firsturl && firsturl.partnerName}.png)`}} 
            href={`${firsturl && firsturl.url+gclid}`} target='_blank' rel="noreferrer"
             onClick={(e) =>GaEventTracker('Sidebar link clicked',firsturl.url+gclid)}>
            </Sidebarbottom>
            {/* <Allarticles>
                <h2>Must Reads</h2>
                {articles.map((item,index)=>{
                    if (index<4){
                        return(
                            <Toparticles key = {item.id} item = {item}/>
                            
                        )
                    }
                    return(null)
                })}
                <span> <Link to={`/articles`}>See More about aritcles</Link> </span> 
            </Allarticles> */}
            
        </SidebarContainer>
    )
}
const SidebarContainer = styled.div`
    display:flex;
    flex-direction:column;
    flex:0.2;
    // justify-content:center;
    align-items:center;
    @media(max-width:992px){
        display:none
    }
`
const Sidebartop = styled.div`
    border: 1px solid rgba(2,23,34,0.08);
    border-radius: 5px;
    background-color: #F3F3F3;
    padding:30px 20px;
    width:100%;
    margin-bottom:10px;
    span{
        color: #062739;
        font-size: 28px;
        font-weight: 900;
        letter-spacing: 0.58px;
        display:block;
        text-align:left;
    
    }
    img{
        
    }
    p{
        color: #000000;
        font-size: 15px;
        font-weight: 300;
        letter-spacing: 0;
        line-height: 21px;
        width:55%;
}
    div{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    }
`

const Sidebarbottom = styled.a`
background-size: contain;
border: 1px solid rgba(2,23,34,0.08);
border-radius: 5px;
background-color: #F3F3F3;
padding:30px 20px;
width:100%;
cursor:pointer;
// background-size: cover;
background-repeat: no-repeat;
background-position: top;
margin-bottom:10px;
height:400px;
p{
    color: #000000;
    font-size: 15px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 20px;
    margin-top:10px
}
    
    
`
// const Sidebartext = styled.div `
//     color: #184276;
//     font-size: 24px;
//     font-weight: 900;
//     letter-spacing: 0.13px;
//     line-height: 29px;
//     padding: 20px 0;
//     font-family: 'Avenir';
// }
// `
// const PartnerImg = styled.div`
//     width : 150px;
//         img{
//             width:100%;
//             height:100%;
//             object-fit:cover;
//         }
// `

// const Sidebarbutton = styled.button`
//     height: 46px;
//     width: 207px;
//     border-radius: 3px;
//     background: linear-gradient(267.34deg, #48E2E2 0%, #0A6BFF 99.92%);
//     box-shadow: 0 5px 50px 0 rgba(106,169,216,0.7);
//     border:none;
//     outline:none;
//     margin-top:200px;
//     color:white;
//     font-weight: 900;
//     font-size: 15px;
//     letter-spacing: 0;
//     line-height: 18px;
//     text-align: center;
//     text-shadow: 0 2px 20px 0 rgba(94,94,94,0.5);
//     cursor:pointer;
//     a{
//         text-decoration:none;
//         color:white;
//     }
// `
const Allarticles = styled.div`
    h2{
        padding: 25px 10px 10px 20px;
        background-color: #F3F3F3;
        color: #000000;
        font-size: 18px;
        font-weight: 900;
        letter-spacing: 0;
        line-height: 20px;
        
    }
    span{
        padding: 25px 10px 25px 20px;
        background-color: #F3F3F3;
        color: #000000;
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 20px;
        display:block;
    }
    border: 1px solid rgba(2,23,34,0.08);
    border-radius: 5px;
`
export default Sidebar