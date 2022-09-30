import React, { useState } from 'react'
import styled from 'styled-components'

import Step22 from './Step2-2';
function Step2({input, setinput}) {

    const [next, setNext] = useState(false);

    function nextstep(){
        setNext(true);
    }
    return (
            <Step2Container>
                {!next ? (
                    <Div>
                        <Details>
                                <p>STEP <span>2</span> OF <span>3</span></p>
                                <Title>
                                    <h4>
                                        Create a password to start
                                    </h4>
                                    <h4>
                                        your membership
                                    </h4>
                                </Title>
                                <Subtitle>
                                    <p>Just a few steps and you're done !</p>
                                    <p>We hate paperwork, too.</p>
                                </Subtitle>
                        </Details>
                        <Input>
                            <input type="text" value={input} />
                            <input type="password" value="" placeholder="Add a password" />
                        </Input>
                        <Button onClick={nextstep}>
                                <h4>Next</h4>
                        </Button>
                    </Div>

                ): (
                    <Step22 />
                ) }
                
                
            </Step2Container>
    )
}

export default Step2
const Div = styled.div`
        margin-top: 10vh;
        width: 55vh;
        /* height: 50vh; */
        /* border: 2px solid blue; */
        display: flex;
        /* align-items: center; */
        justify-content: center;
        flex-direction: column;
`;


const Step2Container = styled.div`
    position: absolute;
    top: 100px;
    background-color: white;
    width: 100%;
    height: calc(100vh - 100px);
    /* border: 2px solid red; */
    color: var(--main-color);
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    
`;
const Input = styled.div`
    margin-bottom: 20px;;
    > input{
        height: 8vh;
        width: 55vh;
        outline: none;
        margin-bottom: 10px;
        padding-left: 15px;
        font-size: 15px;
        display: flex;
        flex-direction: column;
    }
`;
const Details = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    > p{
        color: grey;
        font-size: 13px;
        padding-bottom: 10px;
        > span{
            color: black;
        }
    } 
`



const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width:55vh;
    background-color: #e90000;
    height: 8vh;
    border-radius: 5px;
    /* border: 2px solid yellow; */
    > h4{
        color: #fff;
        font-size: 20px;
    }
    &:hover{
        background-color: red;
        cursor: pointer;
    }
`
const Button2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width:35vh;
    background-color: #e90000;
    height: 8vh;
    border-radius: 5px;
    /* border: 2px solid yellow; */
    > h4{
        color: #fff;
        font-size: 20px;
    }
    &:hover{
        background-color: red;
        cursor: pointer;
    }
`
const Title = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    padding-bottom:15px;
    > h4{
        font-size: 30px;
    }
`
const Subtitle = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    padding-bottom:20px;
    > p{
        font-size: 18px;
    }

`



