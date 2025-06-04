import { createContext, useState, type ReactNode } from "react";
import type { PokemonI } from "~/models/pokemon.interface";

interface PokemonContextI {
    pokemons: PokemonI[],
    selectedPokemon: any,
    fetchPokemons: any,
    fetchPokemonDetails: any
}

export const PokemonContext = createContext<PokemonContextI>(null!);

export const PokemonProvider = ({children}: {children: ReactNode}) => {
    const apiRoot = "https://pokeapi.co/api/v2/pokemon";
    const [pokemons, setPokemons] = useState<PokemonI[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<any>();

    const fetchPokemons = async () => {
        let url = `${apiRoot}?limit=20`;
        await fetch(url)
        .then(result => result.ok && result.json())
        .then(datas => setPokemons(datas))
        .catch(err => console.error(`Erreur : ${err}.`));
    }

    const fetchPokemonDetails = async (name: string) => {
        await fetch(`${apiRoot}/${name}`)
        .then(result => result.ok && result.json())
        .then(datas => setSelectedPokemon(datas))
        .catch(err => console.error(`Erreur : ${err}.`));
    }

    return(
        <PokemonContext.Provider value={{
            pokemons,
            selectedPokemon,
            fetchPokemons,
            fetchPokemonDetails
        }}>
            {children}
        </PokemonContext.Provider>
    );

}