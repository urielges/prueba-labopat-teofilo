export async function fetchPokemon(pokemon){
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
}