import React, { useState } from 'react'
import styled from 'styled-components'
import HeroDetails from './HeroDetails';
import Nav from './Nav';
import SideBar from './SideBar';
function MovieDetails() {

    const [S, setS] = useState(false);


    return (
        <MovieDetailsContainer>
            <Nav open={S} openfun={setS}/>
            <HeroDetails open={S} openfun={setS}/>
            hey


            {
                S && (
                    <SideBar/>
                )
            }
        </MovieDetailsContainer>
    )
}

export default MovieDetails
const MovieDetailsContainer  = styled.div`
    background-color: var(--main-color);
    /* background-color: white; */
    z-index: -1;
    /* display:flex;
    flex-direction:column; */
    position:absolute;
    width:100%;
    min-height:100vh;
    overflow:hidden;
    color: white;
    border: 2px solid yellow;
`;