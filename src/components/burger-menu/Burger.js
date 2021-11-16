import React from 'react';
import styled from 'styled-components';

const Burger = ({setNav,Nav}) =>{
    const BurgerHandlar = () =>{
        setNav(!Nav);
    }
    return(
        <Burgerwrapper>
            <Burgermenu onClick={BurgerHandlar} Nav={Nav}>
                <div/>
                <div/>
                <div/>
            </Burgermenu>
        </Burgerwrapper>
    )
}
const Burgerwrapper = styled.div`
    display:none;
    @media(max-width:992px){
        display:block;
    }
`
const Burgermenu = styled.div`
    height:1.5rem;
    width:2rem;
    position:fixed;
    top:15px;
    right:20px;
    display:flex;
    flex-flow:column nowrap;
    justify-content:space-between;
    z-index:10;
    div{
        width:2rem;
        height:0.3rem;
        border-radius:10px;
        transform-origin:3px;
        transition: all 0.3s linear;
        background-color:${({Nav})=> Nav ? 'white' : 'white'};
        &:nth-child(1){
            transform: ${({Nav})=> Nav ? 'rotate(45deg)':'rotate(0)'}
        }
        &:nth-child(2){
            transform: ${({Nav})=> Nav ? 'translateX(200%)' : 'translateX(0)'};
            opacity: ${({Nav})=> Nav ? 1 : 2}
        }
        &:nth-child(3){
            transform: ${({Nav})=> Nav ? 'rotate(-45deg)':'rotate(0)'}
        }
    }
    
    
`

export default Burger