import React, { useEffect, useState } from 'react';
import PokemonCard from '../Components/pokemon-card';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokemonDetail from '../Components/pokemon-detail';
import styled from 'styled-components';

const Cards = styled.div`
    width: 80%;
    margin-left: 10%;
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
`;

const Title = styled.h1`
    text-align: center;
    margin-top: 50px;
`;

function HomePage () {
    const [pokemons, setPokemons] = useState([]);

    useEffect(()=>{
        getPokemons();
    }, []);

    const getPokemons = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`);
        const data = await response.json();
        setPokemons(data.results);
        console.log(data.results);        
    }
        
    return(
        <>
        <div>
            <Title>Pokémon!</Title>
            <BrowserRouter> 
                <div className='App'>
                    <Switch>
                    <Route path='/' exact>
                    <Cards>
                        {pokemons.map(pokemon=>(
                            <PokemonCard 
                                name={pokemon.name}
                                url={pokemon.url}
                                key={pokemon.name}
                            />
                        ))}
                    </Cards>
                    </Route>
                    <Route path='/:name' exact render={({ match }) => {
                        return <PokemonDetail name={match.params.name} />     
                    }}/>
                    </Switch>
                    
                </div>
            </BrowserRouter>
        </div>
        </>
    );


}

export default HomePage;