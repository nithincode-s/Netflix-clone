import React, { useState } from 'react'
import styled from 'styled-components'
import Body from './Body';
import PartOne from './Partone';
import Nav from './Nav'
import SideBar from './SideBar';
import PartTwo from './PartTwo';
import PartThree from './PartThree';
import ContinueWatching from './ContinueWatching';


const Home = () => {
    const [S, setS] = useState(false);
    return (
        <HomeContainer>
            <Nav open={S} openfun={setS}/>
            <Body open={S} openfun={setS}/>
            <ContinueWatching/>
            <PartOne/>
            <PartTwo/>
            <PartThree/>

            {
                S && (
                    <SideBar/>
                )
            }
        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`
    background-color: var(--main-color);
    /* background-color: #ffd900; */
    z-index: -1;
    /* display:flex;
    flex-direction:column; */
    position:absolute;
    width:100%;
    min-height:100vh;
    overflow:hidden;
`;