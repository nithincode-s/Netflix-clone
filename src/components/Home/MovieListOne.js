import React from 'react'
import styled from 'styled-components'
function MovieListOne({pic}) {
    const trailer = '';
    return (
        <MovieListContainer>
            <img src={pic} alt="movie img" />
        </MovieListContainer>
    )
}

export default MovieListOne
const MovieListContainer = styled.div`
    display: flex;
    min-width: 24vh;
    height: 100%;
    background-color: red;
    margin-right: 13px;
    border-radius: 2px;
    cursor: pointer;
    &:hover{
        transform: scale(1.02);
    }
    > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;