import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
function Plan() {
    return (
        
        <HeaderRegister>
            <Link to ="login">
                <Logo>
                    
                        <img src="/images/logo.svg" alt="" />
                </Logo>
            </Link>
            <Link to ="login">
            <ButtonsRegister>           
                <SigninRegister >
                    <h4>Sign Out</h4>
                </SigninRegister>         
            </ButtonsRegister>
            </Link>
        </HeaderRegister>
            )
       
    
}

export default Plan
const HeaderRegister = styled.div`
    position: absolute;
    top:0;
    width: 100%;
    background-color: white;
    /* background: var(--main-color); */
    /* background: linear-gradient(180deg, rgba(3,3,3,1) 26%, transparent 100%); */
    height: 100px;
    /* border: 2px solid ; */
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.div`
    margin-left: 5vh;
    height: 100px;
    display: flex;
    align-items: center;
    
    /* border: 2px solid green; */
    > img{
        height: 160px;
        cursor: pointer;
        /* border: 2px solid white; */
    }
    @media screen and (max-width: 750px ){
        > img{
            height: 120px;
        }
    }
`;
const ButtonsRegister = styled.div`
    display: flex;
    /* border: 2px solid green; */
    width: 200px;
    justify-content: space-between;
    margin-right: 0px;
`;

const SigninRegister = styled.div`
    padding: 6px;
    /* background-color: rgba(211, 0, 0, 0.822); */
    width: 100px;
    border-radius: 3px;
    display: flex;
    color: var(--main-color);
    /* border: 2px solid black; */
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    margin-right: 10vh;
    &:hover{
        &:before{
            content: "";
            width: 70%;
            height: 2px;
            background-color: var(--main-color);
            position: absolute;
            bottom:0;
        }
    }
    >  h4{
        font-size: 20px;
    }
`;