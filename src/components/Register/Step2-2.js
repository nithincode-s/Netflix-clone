import React from 'react'
import styled from 'styled-components'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useState } from 'react';
import DoneIcon from '@material-ui/icons/Done';
import { Link } from 'react-router-dom';
function Step22() {
    return (
        <Div>
                        <Details2>
                                <h1>
                                    <CheckCircleOutlineIcon/>
                                    <p>STEP <span>2</span> OF <span>3</span></p>
                                </h1>
                                <Title>
                                    <h4>
                                        Choose your plan.
                                    </h4>
                                    
                                </Title>
                                <Subtitle2>
                                    <p> <DoneIcon/><span>No commitments, cancel <br />anytime.</span></p>
                                    <p> <DoneIcon/><span>Everything on NEtflix for one low<br />price.</span></p>
                                    <p> <DoneIcon/><span>No ads and no extra fees. Ever.</span></p>
                                        
                                </Subtitle2>
                        </Details2>
                        <Link to="plan">
                            <Button2 >
                                    <h4>Next</h4>
                            </Button2>
                        </Link>
                    </Div>
    )
}

export default Step22
const Div = styled.div`
        margin-top: 10vh;
        width: 44vh;
        /* height: 50vh; */
        /* border: 2px solid blue; */
        display: flex;
        /* align-items: center; */
        justify-content: center;
        flex-direction: column;
`;

const Subtitle2 = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    padding-bottom:20px;
    padding-left: 20px;
    > p{
        display: flex;
        /* justify-content: center; */
        /* align-items: center; */
        > .MuiSvgIcon-root{
            font-size: 30px;
            color: red;
            margin-right: 5px;
        }
        > span{
            padding-bottom: 20px;
            font-size: 18px;
        }
    }

`

const Button2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width:44vh;
    background-color: #e90000;
    height: 8vh;
    margin-left: 10px;
    border-radius: 5px;
    text-decoration: none;

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
    padding-left: 54px;
    > h4{
        font-size: 30px;
    }
`
const Details2 = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    > h1{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 25px;
        > p{
            padding-top: 10px;
            color: grey;
            font-size: 13px;
            padding-bottom: 10px;
            > span{
                color: black;
            }
        }
        > .MuiSvgIcon-root{
            /* border: 2px solid red; */
            color: red;
            font-size: 55px;
            
        }   
    }
`
