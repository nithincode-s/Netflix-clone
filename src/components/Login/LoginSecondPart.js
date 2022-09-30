import React from 'react'
import styled from 'styled-components'
function LoginSecondPart() {
    return (
        <SecondPart>
                <Main>
                    <Left>
                        <div>
                            <h4>Enjoy on your TV.</h4>
                            <p>Watch on smart TVs, PlayStation, Xbox,</p>
                            <p>Chromecast, Apple TV, Blu-ray players and</p>
                            <p>more.</p>
                        </div>
                    </Left>
                    <Right>
                        <div>
                        <img src="images/monitor.png" alt="" />
                        </div>
                    </Right>
                </Main>
        </SecondPart>
    )
}

export default LoginSecondPart;
const SecondPart = styled.div`
    width: 100%;
    height: 62vh;
    border-bottom: 8px solid #38383886;
`;
const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 2px solid; */
`;

const Left = styled.div`
    flex: 0.5;
    /* border: 2px solid; */
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > div {
        display: flex;
        flex-direction: column;
        /* border: 2px solid red; */
        padding-left: 30px;
        margin-left: 15vh;
        min-width: 60vh;
        padding-bottom: 20px;
        > h4{
            font-size: 50px;
            padding-bottom:25px;
            
        }
        > p{
            font-size: 25px;
            letter-spacing: 1px;
            padding-bottom:3px;
        }
    }
    @media screen and (max-width: 1340px){
        > div{
            padding-left: 30px;
            margin-left: 25vh;
            min-width: 57vh;
            > h4{
                font-size: 35px;
            }
            > p{
                font-size: 18px;
                
            }
        }
    }
    @media screen and (max-width: 900px){
        > div{
            padding-left: 30px;
            margin-left: 10vh;
            min-width: 52vh;
            > h4{
                font-size: 30px;
            }
            > p{
                font-size: 16px;
                
            }
        }
    }
`;
const Right = styled.div`
    flex: 0.5;
    /* border: 2px solid; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    > div{
        /* border: 2px solid; */
    }
    > div >img{
        margin-left: 10vh;
        height: 450px;
        width: 550px;
        object-fit: contain;
        /* border: 2px solid red; */
        padding-top: 30px;
        
    }
    @media screen and (max-width: 1340px){
        > div{
            > img{
                height: 350px;
                width: 450px;
                margin-left: 10vh;
            }
            
        }
    }
    @media screen and (max-width: 900px){
        > div{
            > img{
                height: 250px;
                width: 350px;
                margin-left: 1vh;
                margin-right: 5vh;
            }
            
        }
    }
`;
