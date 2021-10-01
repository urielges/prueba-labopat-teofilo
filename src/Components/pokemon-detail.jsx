import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const Container =  styled.div`
    width: 50%;
    margin-left: 25%;
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
`;

const CardDetails = styled.div`
    background: linear-gradient(-60deg, rgba(255, 56, 109, 0.1) 52%, rgba(255, 255, 255, 0.5) 48%);
    box-shadow: 1px 5px 15px #CCC;
    width: 80%;
    height: 80%;
    border-radius: 5px;
    padding: 2em;
    margin: 1em;
    overflow: hidden;
    position: relative;
    flex: auto;
    text-align: center;
`;

const Subtitle = styled.h3`
    margin-top: 40px;
    text-transform: capitalize;
`;

const Title = styled.h2`
    color: rgba(135, 0, 9, 1);
    text-transform: capitalize;
`;

const Table = styled.table`
    border-collapse: collapse;
    overflow: auto;
    width: 100%;
`;

const Field = styled.td`
    padding: 1em;
    background: rgba(255, 56, 109, 0.15);
    border-bottom: 2px solid white;
`;

const Tr = styled.tr`
    text-transform: capitalize;

`;

const TableContainter = styled.div`
    overflow:auto;
    max-height:500px !important; 
    display: flex;
    justify-content: center;
    wdth: auto;
    max-width: 40%;
    margin: 0 auto;
    box-sizing: border-box;
`;

const CButton = styled.button`
    position: absolute;
    top: 30px;
    right: 30px;
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



function PokemonDetail (props) {
    const [pokemon, setPokemon] = useState([]);
    const [abilities, setAbilities] = useState([]);
    const [moves, setMoves] = useState([]);
    const [stats, setStats] = useState([]);
    const [types, setTypes] = useState([]);
    
    useEffect(()=>{
        getPokemon();
    },);

    const getPokemon = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`);
        const data = await response.json();
        setPokemon(data);
        setAbilities(data.abilities);
        setMoves(data.moves);
        setStats(data.stats);
        setTypes(data.types);
    }

    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return(
            <Container>
                <CardDetails>
                <CButton onClick={handleClick}>X</CButton> 
                    <img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt=''/>

                        <Title>{pokemon.name}</Title>

                        <h4>Height: {pokemon.height}</h4>
                        <h4>Weight: {pokemon.weight}</h4>

                        <Subtitle>Abilities</Subtitle>
                        <TableContainter>
                            <Table>
                                {abilities.map((ability)=>(
                                    <Tr><Field>{ability.ability.name}</Field></Tr>
                                ))}
                            </Table>
                        </TableContainter>

                        <Subtitle>Moves</Subtitle>
                        <TableContainter>
                            <Table>
                                {moves.map((move)=>(
                                    <Tr><Field>{move.move.name}</Field></Tr>
                                ))}
                            </Table>
                        </TableContainter>

                        <Subtitle>Stats</Subtitle>
                        <TableContainter>
                            <Table>
                                {stats.map((stat)=>(
                                    <Tr>
                                        <Field>{stat.stat.name}</Field>
                                        <Field>{stat.base_stat}</Field>
                                    </Tr>
                                ))}
                            </Table>
                        </TableContainter>   
                        
                        <Subtitle>Types</Subtitle>
                        <TableContainter>
                            <Table>
                                {types.map((type)=>(
                                    <Tr>
                                        <Field>{type.type.name}</Field>
                                    </Tr>
                                ))}
                            </Table>
                        </TableContainter>
                    
                </CardDetails>
            </Container>
    );
}

export default PokemonDetail;