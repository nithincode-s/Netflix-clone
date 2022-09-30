import React, { useState } from 'react'
import styled from 'styled-components'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CheckIcon from '@material-ui/icons/Check';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
function Body(props) {

    const [volume, setVolume] = useState(true);

    function OpenMenu(){
        props.openfun(false);
        // console.log(props.open);
    }
    function volumesettings(){
        setVolume(!volume);
    }

    return (
        <BodyContainer onClick={OpenMenu}>
            <First>
                <D>
                <Title>
                    <img src="/images/e.png" alt="no img" />
                </Title>
                <Description>
                    <h4>Extraction</h4>
                    <Details>
                        <h4>2020</h4>
                        <h3>18+</h3>
                        <h6>1h 57m</h6>
                        <h5>US Movies</h5>
                    </Details>
                    <p>A hardened mercenery's mission becomes a soul-searching race to survive when he's sent into Bangladesh to resuce a drug lord's kidnapped son.</p>
                    <Cast>
                        <h4>Starring: <span>Chris Hemsworth, Rudhraksh Jaiswal, Randeep Hooda</span></h4>
                    </Cast>
                </Description>
                <Buttons>
                    <Play> 
                        <PlayArrowIcon/>
                        <span>Play</span>
                        
                    </Play>
                    <CheckList>   
                        <CheckIcon/>
                        <span>My List</span>
                        
                    </CheckList>
                </Buttons>
                </D>
                <D2>
                    <Controls>
                        <Volume onClick={volumesettings}>
                            {volume ? 
                            (<VolumeUpIcon/>):
                            (<VolumeOffIcon/>)
                            }   
                        </Volume>
                        <h3>18+</h3>

                    </Controls>
                </D2>
            </First>
            
        </BodyContainer>
    )
}

export default Body;



const BodyContainer = styled.div`
    width:100%;
    height: 90vh;
    position: relative;
    display: flex;
    color: white;
    z-index:-1;
    /* border: 2px solid red; */
`;

const First = styled.div`
    align-items: top;
    position: relative;
    height: 100%;
    min-width:100%;
    background: rgb(3,3,3);
    background: linear-gradient(90deg, rgba(3,3,3,0.7234244039412641) 15%, rgba(137,135,135,0.7234244039412641) 70%, rgba(255,255,255,0.9839286056219363) 100%);
    /* background-color: red; */
    display:flex;
    /* flex-direction: column; */
    z-index: -10;
    &:before{
        position: absolute;
        content:"";
        top:0;
        bottom:0;  
        left:0;
        right:0;
        background-image:url("/images/extraction.jpg");
        background-position:top;
        background-size:cover;
        background-repeat: no-repeat;
        z-index:-1;
        opacity: 0.9;

    }
`;

const D = styled.div`
/* background: black;
background:linear-gradient(90deg, #000000b8 45%,  transparent 100%); */
background: rgb(3,3,3);
background: linear-gradient(81deg, rgba(3,3,3,1) 30%,  transparent 100%);
height: 100%;
width: 60%;
/* padding-top: 40px; */
padding: 60px 80px;
/* border: 2px solid red; */
`;






const D2 = styled.div`
    z-index: 1;
    width: 40%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* border: 2px solid red; */
    margin-top:45vh;
`;
const Controls = styled.div`
    display: flex;
    justify-content: flex-end;
    /* border: 2px solid red; */
    width: 100%;
    height: 5.5vh;
    >h3{
        /* border: 2px solid blue; */
        width: 14vh;
        display: flex;
        align-items: center;
        background-color: #3b3a3ad1;
        position: relative;
        padding-left: 15px;
        color: white;
        &:before{
            content: "";
            width: 4px;
            height: 100%;
            position:absolute;
            left: -1px;
            top:0;
            background-color: #ffffff;
            
        }  
    }
`;

const Volume = styled.div`
        width: 5vh;
        height: 5vh;
        border: 2px solid #acacac;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-color: #3b3a3ad1;
        border-radius: 50%;
        justify-content:center;
        cursor: pointer;
        margin-right: 8px;
    > .MuiSvgIcon-root{
        color: white;
    }
    &:hover{
        background-color: #1b1b1be6;
        border: 2px solid white;
        transform: scale(1.06)
    }
`;






const Title = styled.div`
    display: flex;
    min-width: 75vh;
    min-height: 25vh;
    margin-top: 20px;
    align-items: center;
    /* padding: 0 80px; */
    /* background-color: black; */
    > img{
        width: 90%;
        height: 100%;
        object-fit: contain;
    }
`;
const Description = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* padding: 0 80px; */
    > h4{
        font-size: 25px;
        margin-bottom: 10px;
    }
    > p{
        /* background-color: red; */
        min-width: 70vh;
        font-size: 20px;
        margin-bottom: 30px; 
    }
`;
const Details = styled.div`
    align-items: center;
    justify-content: flex-start;
    /* background-color:red; */
    min-width: 35vh;
    display: flex;
    padding-bottom: 20px;
    > h4{
        font-size: 15px;
        color: grey;
        border-right: 2px solid grey;
        padding-right: 8px;
        margin-right: 10px;
    }
    > h3{
        font-size: 15px;
        border: 2px solid grey;
        padding: 0 6px;
        color: grey;
        margin-right: 10px;
    }
    > h6{
        font-size: 15px;
        color: grey;
        border-right: 2px solid grey;
        border-left: 2px solid grey;
        padding-right: 8px;
        padding-left: 8px;
        margin-right: 10px;
    }
    > h5{
        color: grey;
    }
`;
const Cast = styled.div`
    display: flex;
    align-items: center;
    min-width: 60vh;
    margin-bottom: 35px;
    /* background-color: red; */
    > h4 {
        color: grey;
        > span{
            color: white;
        }
    }
`;

const Buttons = styled.div`
    display: flex;
    /* background-color: red; */
    width: 42vh;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    /* z-index: -1; */
`;
const Play = styled.div`
        width: 18vh;
        background-color: #3b3a3a4e;
        /* background-color: green; */
        align-items: center;
        height: 6vh;
        color:white;
        opacity: 0.9;
        cursor: pointer;
        justify-content: center;
        display: flex;
        border-radius: 3px;
        > .MuiSvgIcon-root{
            font-size: 27px;
            margin-right: 5px;
        }
        > span{
            font-size: 17px;
            font-weight:900 ;
        }
        &:hover{
            background-color:white;
            color: var(--main-color);
        }

`;
const CheckList = styled.div`
    
        width: 21vh;
        height: 6vh;
        background-color: #3b3a3a4e;
        align-items: center;
        border-radius: 3px;
        justify-content: center;
        display: flex;
        opacity: 0.9;
        cursor: pointer;
        > .MuiSvgIcon-root{
            font-size: 20px;
            font-weight:900;
            margin-right: 8px;
        }
        > span{
            font-size: 17px;
            font-weight:900 ;
        }
        &:hover{
            background-color:white;
            color: var(--main-color);
        }
    
`;