import React from 'react'
import styled from 'styled-components'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MovieListOne from './MovieListOne';
import { useRef } from 'react';
import { useState } from 'react';
function PartThree() {

    const [slideNo, setSlideNo] = useState(0);
    const scrollref = useRef();

    const [moviesarray, setMoviesArry] = useState([
        {image : '/images/never.jpg', id: "neverhaveiever"},
        {image: '/images/oldgaurd.jpg' , id: 'theoldgaurd'},
        {image: '/images/orange.jpg' , id: 'orangeisthenewblack'},
        {image: '/images/rougecity.png' , id: 'therougecity'},
        {image: '/images/sexeducation.png' , id: 'sexeducation'},
        {image: '/images/stranger.jpg' , id: 'strangerthings'},
        {image: '/images/the100.jpg' , id: 'the100'},
        {image: '/images/vampire.jpg' , id: 'thevampirediaries'},

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
        <PartThreeContainer>
            <h4>Watch Again</h4>
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
        </PartThreeContainer>
    )
}

export default PartThree
const PartThreeContainer = styled.div`
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