import React from 'react'
import styled from 'styled-components'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MovieListOne from './MovieListOne';
import { useRef } from 'react';
import { useState } from 'react';
function PartOne() {

    const [slideNo, setSlideNo] = useState(0);
    const scrollref = useRef();


    const [moviesarray, setMoviesArry] = useState([
        {image : '/images/army.jfif', id: "armyofdead"},
        {image: '/images/6underground.jpg' , id: 'sixunderground'},
        {image: '/images/bad.jpg' , id: 'breakingbad'},
        {image: '/images/bright.jpg' , id: 'bright'},
        {image: '/images/cards.png' , id: 'houseofcards'},
        {image: '/images/daredevil.jpg' , id: 'daredevil'},
        {image: '/images/dark.jfif' , id: 'dark'},
        {image: '/images/cards.png' , id: 'houseofcards'},

        {image: '/images/cards.png' , id: 'houseofcards'},
        {image: '/images/cards.png' , id: 'houseofcards'},
        {image: '/images/cards.png' , id: 'houseofcards'},
        {image: '/images/cards.png' , id: 'houseofcards'},
        {image: '/images/cards.png' , id: 'houseofcards'},
        {image: '/images/cards.png' , id: 'houseofcards'},
        {image: '/images/cards.png' , id: 'houseofcards'},
        {image: '/images/cards.png' , id: 'houseofcards'}
        
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
        <PartOneContainer>
            <h4>Popular on Netflix</h4>
            <Icons>
                {slideNo != 0 && (
                    <Left>
                    <ArrowBackIosIcon onClick={()=>handleScroll("left")}/>
                    </Left>
                )}
                
                <List ref={scrollref}>
                    {
                        moviesarray.map((movie)=>(
                            <MovieListOne id={movie.id} pic = {movie.image}/>
                        ))
                    }
                    
                    
                    
                </List>
                {slideNo <= 1 && (
                    <Right>
                    <ArrowForwardIosIcon onClick={()=>handleScroll("right")}/>
                    </Right>
                )}
                
            </Icons>
        </PartOneContainer>
    )
}

export default PartOne
const PartOneContainer = styled.div`
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