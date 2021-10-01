import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

const Card = styled.div`
    background: linear-gradient(-10deg, rgba(255, 56, 109, 0.1) 52%, rgba(255, 255, 255, 0.5) 48%);
    box-shadow: 1px 5px 15px #CCC;
    width: 10em;
    height: auto;
    border-radius: 5px;
    padding: 2em;
    margin: 1em;
    overflow: hidden;
    position: relative;
    flex: auto;
`;

const CImg = styled.img`
    max-width: 100%;
    height: auto !important;
    text-align: center;
`;

const CTitle = styled.h3`
    text-transform: capitalize;
    color: rgba(135, 0, 9, 1);
`;

const CButton = styled.button`
    background: transparent;
    border-radius: 30px;
    font-size: 15px;
    font-weight: 600;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.5em 1em;
    cursor: pointer;
    transition: all 0.3s ease-out;
    &:hover{
        background: palevioletred;
        color: #FFF;
        transition: all 0.3s ease-out;
    }
`;

function PokemonCard (props) {
    const [pokemon, setPokemon] = useState([]);

    useEffect(()=>{
        getPokemons();
    },);

    const getPokemons = async () => {
        const response = await fetch(props.url);
        const data = await response.json();
        setPokemon(data);    
    }

    return(
        <Card>
            <CImg class="center" variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} rounded />
                <CTitle>{props.name}</CTitle>
                <Link to={`/${props.name}`}>
                    <CButton>Go</CButton>    
                </Link>
        </Card>
    );
}

export default PokemonCard;