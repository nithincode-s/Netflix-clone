import React from 'react'
import styled from 'styled-components'
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';
function SignInForm() {
    return (
        <SigninContainer>
            <Main>
                <Parts>
                    <h4>Sign In</h4>
                    <Inputs>
                        <input type="text"  placeholder="Email or phone number"/>
                        <input type="password"  placeholder="Password"/>
                    </Inputs>
                    <Link to="plan">
                        <Button>
                            <h4>Sign In</h4>
                        </Button>
                    </Link>
                    <Options>
                        <h4>
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </h4>
                        <h5>
                            Need Help?
                        </h5>
                    </Options>
                    <Links>
                        <h4>
                             <span>G</span>Login with google
                        </h4>
                        <h5> New to Netflix? 
                            <span>Sign up now</span>
                        </h5>
                        <p>This page is protected by Google reCAPTCHA to <br />
                        ensure you're not a bot. <span>Learn more</span></p>
                    </Links>
                </Parts>
            </Main>
            <footer>
                <p>Questions? Call 000-800-040-1843</p>
                <div>
                    <div>
                        <h6>FAQ</h6>
                        <h6>Help Center</h6>
                        <h6>Terms of Use</h6>
                        <h6>Privacy</h6>
                    </div>
                    <p>
                        <h6>Cookie Preference</h6>
                        <h6>Corporate Information</h6>
                    </p>
                </div>
                <h2>
                    <span>
                        <LanguageIcon/>
                        <p>English</p>
                        <ArrowDropDownIcon/>
                    </span>
                </h2>
            </footer>
        </SigninContainer>
    )
}

export default SignInForm

const Main = styled.div`
    background-color: var(--main-color);
    height:85vh;
    position: absolute;
    top: 90px;
    opacity: 0.87;
    width: 59vh;
    color: white;
`;

const Parts = styled.div`
    padding: 8vh;
    display: flex;
    opacity: 1;

    /* border: 2px solid blue; */
    flex-direction: column;
    text-decoration: none
    > h4{
        margin-bottom: 4vh;
        font-size: 35px;
    }
`;
const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 2px solid red; */
    > input{
        margin-bottom: 16px;
        height: 7vh;
        width: 100%;
        border-radius: 5px;
        outline: none;
        font-size: 16px;
        padding: 10px;
        background-color: #2b2a2a;
        color: white;
        border: none;
        opacity: 1;
    } 
`;
const Button = styled.div`
    background-color: red;
    height: 7vh;
    width: 100%;
    margin-top: 3vh;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
`;
const Options = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    align-items: center;
    > h4{
        display: flex;
        align-items: center;
        font-weight: 100;
        font-size:12px;
        > input{
            background-color: grey;
            width: 17px;
            height: 17px;
            margin-right: 5px
        }
    }
    > h5{
        font-weight: 400;
        cursor: pointer;
    }

`;

const Links = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 35px;
    /* border: 2px solid; */
    padding: 30px 0px;
    > h4 {
        font-weight: 400;
        display: flex;
        color: #b9b8b8;
        align-items: center;
        cursor: pointer;
        > span{
            /* padding-right: 10px; */
            margin-right: 10px;
            font-weight: 800;
            color: #4b71ec;
            /* border: 2px solid ; */
            background-color:#3b3b3b;
            font-size: 20px;
            height: 100%;

            width: 30px;
            display: flex;
            border-radius: 5px;
            align-items: center;
            justify-content: center;
            
        }
    }

    > h5{
        margin-top: 15px;
        font-weight: 300;
        font-size: 20px;
        color: #b9b8b8;
        > span{
            font-weight: 400;
            color: white;
            padding-left: 10px;
        }
    }
    > p{
        margin-top: 15px;
        font-size: 13px;
        color: #b9b8b8;
        > span{
            color: #4b71ec;
            font-weight: 600;
            cursor: pointer;
        }
    }

`;

const SigninContainer = styled.div` 
    /* border: 2px solid red; */
    height: 41vh;
    width: 100%;
    background: url("/images/wallpaper.jpg");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: -1;
    > footer{
        z-index: 111;
        /* border: 2px solid red; */
        margin-top: 60px;
        height: 80%;
        width: 100%;
        opacity: 0.87;
        padding: 35px;
        background-color: var(--main-color);
        > p{
            font-size: 15px;
            font-weight: 200;
            letter-spacing: .8px;
            color: grey;
        }
        > div{
            font-size: 18px;
            width: 80%;
            margin-top: 20px;
            display: flex;
            color: grey;
            /* border: 2px solid white; */
            flex-direction: column;
            height: 6vh;
            justify-content: space-between;
            > div{
                width: auto;
                display: flex;
                /* border: 2px solid red; */
                justify-content: space-between;
                > h6{
                    cursor: pointer;
                }
            }
            > p{
                width: 60vh;
                display: flex;
                /* border: 2px solid red; */
                > h6{
                    margin-right: 28px;
                    cursor: pointer;
                }
            }

        }
        > h2{
            margin-top: 20px;
            border: 2px solid grey;
            width: 160px;
            height: 6vh;
            justify-content: center;
            border-radius: 3px;
            color: #858585;
            display: flex;
            flex-direction: row;
            > span{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }
        }
        
    }
`;
