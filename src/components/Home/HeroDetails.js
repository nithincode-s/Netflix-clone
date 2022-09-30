import React from 'react'
import styled from 'styled-components'

// hero details is same as the body container
function HeroDetails(props) {

    function OpenMenu(){
        props.openfun(false);
        // console.log(props.open);
    }

    return (
        <HeroContaier onClick={OpenMenu}>
            hero
        </HeroContaier>
    )
}

export default HeroDetails
const HeroContaier = styled.div`
    width:100%;
    height: 100vh;
    position: relative;
    display: flex;
    color: white;
    z-index:-1;
    border: 2px solid red;
`;