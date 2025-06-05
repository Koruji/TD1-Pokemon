import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "~/contexts/pokemon/PokemonContext";
import { NavLink } from "react-router";
import "./PokemonView.css";


export default function PokemonView() { 

    const {pokemons, fetchPokemons} = useContext(PokemonContext);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetchPokemons()
        if(pokemons) {
            setLoading(false);
        }
    }, [fetchPokemons]);
    

    return (isLoading ? (
            <p>En attente des données...</p>
        ) : (
            pokemons.length === 0 ? (
                <p>Pas de pokemons dans la base de données.</p>
            ) : (
                <section className="pokemonSection">
                    <div className="container">
                        <h1 className="title">POKEDEX</h1>
                        <ul className="pokemon-list">
                            {pokemons.map((pokemon, index) => (
                                <li key={index} className="pokemon-item"><strong>{pokemon.name.toUpperCase()}</strong> <NavLink to={`pokemon/${pokemon.name}`} className="btn">Voir plus</NavLink></li>
                            ))}
                        </ul>
                    </div>
                </section>
            )
        )      
    );
}