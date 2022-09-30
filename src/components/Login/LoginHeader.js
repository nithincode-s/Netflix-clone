import React from 'react'
import styled from 'styled-components'
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function LoginHeader({setSignin, setRegister,signin , register}) {

    function siginpage(){
        setSignin(true)
        setRegister(false)
    }
    function goback(){
        setSignin(false)
        setRegister(false)
    }
    return (
        <>
            {register ? (
            <HeaderRegister>
                    <Logo onClick={goback}>
                        <img src="/images/logo.svg" alt="" />
                    </Logo>
                    <ButtonsRegister>
                        {! signin && (
                            <>
                                {/* <Language>
                                    <LanguageIcon/>
                                    <p>English</p>
                                    <ArrowDropDownIcon/>
                                </Language> */}
                                <SigninRegister onClick={siginpage} >
                                    <h4>Sign In</h4>
                                </SigninRegister>
                            </>
                        )}    
                    </ButtonsRegister>
            </HeaderRegister>
            ): 
            (
            <Header>
                <Logo onClick={goback}>
                    <img src="/images/logo.svg" alt="" />
                </Logo>
                <Buttons>
                    {! signin && (
                        <>
                            <Language>
                                <LanguageIcon/>
                                <p>English</p>
                                <ArrowDropDownIcon/>
                            </Language>
                                <Signin onClick={siginpage} >
                                <h4>Sign In</h4>
                            </Signin>
                        </>
                    )}    
                </Buttons>
            </Header>
            )
            }
        </>
    )
            
}

export default LoginHeader
const Header = styled.div`
    position: absolute;
    top:0;
    width: 100%;
    background: var(--main-color);
    background: linear-gradient(180deg, rgba(3,3,3,1) 26%, transparent 100%);
    height: 100px;
    /* border: 2px solid ; */
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
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

const Buttons = styled.div`
    display: flex;
    /* border: 2px solid green; */
    width: 200px;
    justify-content: space-between;
    margin-right: 45px;
`;
const ButtonsRegister = styled.div`
    display: flex;
    /* border: 2px solid green; */
    width: 200px;
    justify-content: space-between;
    margin-right: 0px;
`;
const Language = styled.div`
    display: flex;
    border: 2px solid #858585;
    border-radius: 3px;
    width: 100px;
    cursor: pointer;
    justify-content: space-around;
    align-items:center;
    padding: 6px;
    > .MuiSvgIcon-root{
        font-size: 20px;
    }
    > p{
        font-size: 15px;
    }
    &:hover{
        border: 2px solid #ffffff;
    }
`;
const Signin = styled.div`
    padding: 6px;
    background-color: rgba(211, 0, 0, 0.822);
    width: 80px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        background-color: rgb(211, 0, 0);
    }
`;
const SigninRegister = styled.div`
    padding: 6px;
    /* background-color: rgba(211, 0, 0, 0.822); */
    width: 80px;
    /* border-radius: 3px; */
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


