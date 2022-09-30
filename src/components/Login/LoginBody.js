import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
function LoginBody({setRegister, register, setinput, input}) {

    
    function Register(){
        console.log(register);
        setRegister(true);

    }

    function textinput(e){
        e.preventDefault()
        let a = e.target.value.trim()
        if(a !== ""){
            setinput(a)
            // console.log(a)
        }
    }
    return (
        <Body>
            <Title>
                <h1>
                    <h2>Unlimited movies, Tv</h2>
                    <h2>shows and more.</h2>
                    <h4>Watch anywhere. Cancel anytime.</h4>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                </h1>
            </Title>
            <Input>
                <h1>
                    <input type="text"  placeholder="Email address" onChange={textinput} value= {input}/>
                    
                    <Button onClick={input? Register: console.log("enter mailid")} >     
                        <h4>
                            Get Started
                            <span>
                                <ArrowForwardIosIcon/>
                            </span>    
                        </h4>            
                    </Button>
                </h1>
            </Input>
        </Body>
    )
}

export default LoginBody
const Body = styled.div`
    position: absolute;
    top: 100px;
    /* border: 2px solid yellow; */
    width:100%;
    height: calc(100% - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    
`;
const Title = styled.div`
    > h1{
        /* border: 2px solid; */
        min-width: 70%;
        min-height: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 5px;
        
        /* justify-content: space-evenly; */
    }
    > h1 >h2{
        /* border: 2px solid red; */
        font-size: 68px;
    }

    > h1 > h4{
        font-size: 22px;
        padding-top: 10px;
    }
    > h1 > p{
        font-size: 20px;
        padding-top: 10px;
        font-weight: 400;
    }
    @media screen and (max-width: 750px ){
        > h1> h2{
            font-size: 50px;
        }
        > h1 >p{
            font-size: 15px;
        }
        > h1{
            margin-bottom: 45px;
        }
    }

`;
const Input = styled.div`
    /* border: 2px solid red; */
    display: flex;
    margin-bottom: 8vh;
    min-width: 105vh;
    height: 9vh;
    align-items: center;
    justify-content:center;
    margin-top: 10px;
    > h1{
        width: 105vh;
        height: 9vh;
        display: flex;
        justify-content: center;
        align-items: center;
        /* border: 2px solid green; */
    }
    >h1 > input{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70%;
        height: 100%;
        /* border: 2px solid green; */
        text-decoration: none;
        outline: none;
        font-size: 20px;
        color: var(--main-color);
    }
    @media screen and (max-width: 750px ){
        > h1 > input {
            width: 100%;
            height: 60%;
            margin-bottom: 10px;
        }
        > h1{
            flex-direction: column;
            width: 60vh;
            height: 19vh;

        }
        
    }
    
`;
const Button = styled.div`
    min-width: 30%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    cursor: pointer;
    /* border: 2px solid yellow; */
    
    > h4{
        background-color: rgba(211, 0, 0, 0.911);
        display: flex;
        justify-content: center;
        align-items: center;
        /* border: 2px solid blue; */
        width: 100%;
        text-decoration: none;
        height: 100%;
        color: white;
        font-size: 28px;
        font-weight: 400;
        > span{
            margin-left: 5px;
            > .MuiSvgIcon-root{
                font-size: 20px;
            }
        }
    }
    > h4:hover{
        background-color: rgb(255, 0, 0);
        
    }
    @media screen and (max-width: 750px ){
        > h4 {
            width: 100%;
            font-size: 18px;
            height: 55%;
        }
        
    }
`;

