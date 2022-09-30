import React from 'react'
import styled from 'styled-components'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useRef } from 'react';
import { useState } from 'react';
import ResumeMovie from './ResumeMovi';
import MovieDetails from './MovieDetails';
function ContinueWatching() {

    const [slideNo, setSlideNo] = useState(0);
    const scrollref = useRef();
    
    const [moviesarray, setMoviesArry] = useState([
        {image : '/images/vikings.jfif', id: "vikings", title: "Vikings", season: '2', episode: '6',percent: '160'},
        {image: '/images/walkingdead.jpg' , id: 'walkingdead', title: "The Walking Dead",season: '5', episode: '10',percent: '40'},
        {image: '/images/witcher.jpg' , id: 'thewitcher', title: "The Witcher", season: '1', episode: '3', percent: '70'}

   
    ])

    function handleScroll(direction){
        let distance = scrollref.current.getBoundingClientRect();
        // console.log(distance);
        let m = distance.x - 32; 
        if(direction === 'left' && slideNo > 0){
            setSlideNo(slideNo-1);
            scrollref.current.style.transform = `translateX(calc(180vh + ${m}px))`
        }
        if(direction === 'right' && slideNo < 1){
            setSlideNo(slideNo+1);
            scrollref.current.style.transform = `translateX(calc(-180vh + ${m}px ))`
        
        }
        if(direction === 'right' && slideNo == 1){
            setSlideNo(slideNo+1);
            scrollref.current.style.transform = `translateX(calc(-35vh + ${m}px ))`
        
        }
        if(direction === 'left' && slideNo > 1){
            setSlideNo(slideNo-1);
            scrollref.current.style.transform = `translateX(calc(35vh + ${m}px ))`
        
        }
    }

    


    return (
        <ContinueWatchingContainer>

            <h4>Continue Watching for Bunny</h4>
            <Icons>
                {slideNo != 0 && (
                    <Left>
                    <ArrowBackIosIcon onClick={()=>handleScroll("left")}/>
                    </Left>
                )}
                
                <List ref={scrollref}>
                    {
                        moviesarray.map((movie)=>(
                            <ResumeMovie id={movie.id} pic = {movie.image} title = {movie.title} season={movie.season} episode={movie.episode} watched= {movie.percent}/>
                        ))
                    }
                    
                    
                </List>
                {slideNo <= 1 && moviesarray.length > 8 && (
                    <Right>
                    <ArrowForwardIosIcon onClick={()=>handleScroll("right")}/>
                    </Right>
                )}
                
            </Icons>
        </ContinueWatchingContainer>
    )
}

export default ContinueWatching
const ContinueWatchingContainer = styled.div`
    /* border: 2px solid red; */
    height: 45vh;
    width: 100%;
    color: white;
    /* margin-left: 10px; */
    > h4{
        margin-left: 30px;
        padding: 10px 0;
    }
`;
const Icons = styled.div`
    /* color: white; */
    display: flex;
    height: 38vh;
    width: 100%;
    position: relative;
    /* align-items: center; */
    /* justify-content: space-between; */
    /* border: 2px solid blue; */
    z-index: 1;
    
`;
const List = styled.div`
    display: flex;
    /* margin-top: 15px; */
    /* border: 2px solid green; */
    /* background-color: white; */
    /* overflow: hidden; */
    margin-left: 28px;
    width: 100%;
    z-index: -1;
    transition: all 1s ease;
`;

const Left = styled.div`
    > .MuiSvgIcon-root{
        cursor: pointer;
        font-size: 30px;
        background-color: #1b1b1b9f;
        height:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
    }
`;
const Right = styled.div`
    > .MuiSvgIcon-root{
        cursor: pointer;
        font-size: 30px;
        background-color: #1b1b1b9f;
        height:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        right:0;

    }
`;