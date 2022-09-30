import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
function ResumeMovie({pic,id, title,season, episode,watched}) {

    const percentref = useRef({
        style:{
            columnWidth: `${watched}px`
        }
    });
    useEffect(() => {
        percentref.current.style.columnWidth = `${watched}px`;
        console.log(percentref.current.style);
    }, [watched])
    function Select(){
        
        console.log("clicked");
    }
    return (
        <ResumeMovieContainer onClick={Select}>
            <img src={pic} alt="movie img" />
            <Play>
            <PlayCircleOutlineIcon/>
            </Play>
            <Details>
                <h4>{title}</h4>
                <p>S{season},E{episode}
                <span>: Episode {episode}</span>
                </p>
                <h3 ref={percentref}></h3>    
            </Details>
            <InfoOutlinedIcon/>

        </ResumeMovieContainer>
    )
}



export default ResumeMovie;
const ResumeMovieContainer = styled.div`
    display: flex;
    min-width: 24vh;
    height: 100%;
    background-color: transparent;
    margin-right: 13px;
    border-radius: 2px;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    &:hover{
        transform: scale(1.02);
    }
    > img{
        width: 100%;
        height: 90%;
        object-fit: cover;
    }
    > .MuiSvgIcon-root{
        position: absolute;
        right: 0;
        bottom:0;
    }
`;
const Play = styled.div`
    > .MuiSvgIcon-root{
        position: absolute;
        top:13vh;
        left:7vh;
        font-size: 80px;
    }
`;
const Details = styled.div`
    padding-left: 10px;
    position: relative;
    > h3{
        position: absolute;
        /* width: 100%; */
        height: 1px;
        background-color: red;
        border: 2px solid red;
    }
`;