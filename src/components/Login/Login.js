import React, { useState } from 'react'
import styled from 'styled-components'
import LoginSecondPart from './LoginSecondPart';
import LoginBody from './LoginBody';
import LoginHeader from './LoginHeader.js'
import LoginThirdPart from './LoginThirdPart';
import LoginFourthPart from './LoginFourthPart';
import LoginFivePart from './LoginFivePart';
import SignInForm from './SignInForm';
import Register from '../Register/Register';

function Login() {

    const [signin, setSignin] = useState(false)
    const [register, setRegister] = useState(false);
    const [input, setinput] = useState('');

    
    return (
        <LoginContainer>
            <WelcomePage>
                {! register && (
                     <img src="/images/wallpaper.jpg" alt="background-wallpaper" />
                )}
               
                <LoginHeader setSignin = {setSignin} setRegister={setRegister} register={register} signin = {signin}  /> 
                {signin ? (
                   <SignInForm/>
                ): (
                    <>
                        {register? (
                            <Register input={input} setinput={setinput}/>
                        ): (
                            <LoginBody setRegister={setRegister} register={register} setinput={setinput} input={input}/>
                        ) }
                    </>
                    )
                }   
                
            </WelcomePage>
            
            {! register && !signin && (
                <>
                    <LoginSecondPart/>
                    <LoginThirdPart/>
                    <LoginFourthPart/>
                    <LoginFivePart/>
                </>
            )   
            }
            
        </LoginContainer>
    )
}

export default Login
const LoginContainer = styled.div`
    background-color: var(--main-color);
    /* background-color: white; */
    z-index: -1;
    /* border: 2px solid yellow; */
    position:absolute;
    width:100%;
    color: white;
    min-height:100vh;
    overflow-x:hidden;
`;
const WelcomePage = styled.div`
    width: 100%;
    height: 99vh;
    border-bottom: 8px solid #38383886;
    position: relative;
    top: 0;
    /* background-color: white; */
    color: white;
    > img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        display: flex;
        opacity: 0.9;
        z-index: 1;
        /* border: 2px solid white; */
    }

`;
