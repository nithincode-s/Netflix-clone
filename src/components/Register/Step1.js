import React from 'react'
import styled from 'styled-components'
function Step1({click1, setClick1}) {

    
    function next(){
        setClick1(true);
    }
    return (
            <Step1Container>
                <div>
                    <Image>
                            <img src="/images/sept1.png" alt="" />
                    </Image>
                    <Details>
                            <p>STEP <span>1</span> OF <span>3</span></p>
                            <Title>
                                <h4>
                                    Finish setting up your
                                </h4>
                                <h4>
                                    account
                                </h4>
                            </Title>
                            <Subtitle>
                                <p>Netflix is personalised for you.</p>
                                <p>Create a password to watch on any</p>
                                <p>device at any time.</p>
                            </Subtitle>
                    </Details>
                    <Button onClick={next}>
                            <h4>Next</h4>
                    </Button>
                </div>
            </Step1Container>
    )
}

export default Step1
const Step1Container = styled.div`
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
    > div{
        margin-top: 10vh;
        width: 55vh;
        /* height: 50vh; */
        /* border: 2px solid; */
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

const Image = styled.div`
    /* border: 2px solid red; */
    width: 80%;
    height: 90%;
    >img{
        width:100%;
        height: 100%;
        object-fit: contain;
    }

`
const Details = styled.div`
    display: flex;
    align-items: center;
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
    width:41vh;
    background-color: #e90000;
    height: 18vh;
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
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom:15px;
    > h4{
        font-size: 30px;
    }
`
const Subtitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom:20px;
    > p{
        font-size: 18px;
    }
`