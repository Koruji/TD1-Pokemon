import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "~/contexts/pokemon/PokemonContext";
import { NavLink, useParams } from "react-router";
import "./PokemonDetailView.css";

export default function PokemonDetailView() { 

    const params = useParams();
    let pokemonName = "";
    if(params.pokemonName) pokemonName = params.pokemonName;
    if(pokemonName === null) { throw new Error("Ce pokemon n'existe pas !") };

    const {selectedPokemon, fetchPokemonDetails} = useContext(PokemonContext);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetchPokemonDetails(pokemonName)
        if(selectedPokemon) {
            setLoading(false);
        }
    }, [fetchPokemonDetails]);

    // Récupération des données du pokemon
    let abilities = "";
    let type = "";

    if(selectedPokemon) {
        selectedPokemon.abilities.forEach((item: { ability: { name: string; }; }) => {
            abilities += item.ability.name + " | ";
        });

        selectedPokemon.types.forEach((item: { type: { name: string; }; }) => {
            type += item.type.name + " | ";
        });
    }

    return (isLoading ? (
            <p>En attente des données...</p>
        ) : (selectedPokemon === undefined ? (
                <p>Pas de pokemon a ce nom.</p>
            ) : (
                <section className="pokemon-detail">
                    <h1 className="title">{selectedPokemon.name.toUpperCase()}</h1>
                    <img className="img" src={selectedPokemon.sprites.front_default}/>
                    <table className="pokemon-stats-table">
                        <thead>
                            <th>Nom</th>
                            <th>Poids</th>
                            <th>Taille</th>
                            <th>Type</th>
                            <th>Techniques</th>
                            <th>PV</th>
                            <th>Puissance d'attaque</th>
                            <th>Défense</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{selectedPokemon.name}</td>
                                <td>{selectedPokemon.weight} hg</td>
                                <td>{selectedPokemon.height} dm</td>
                                <td>{type}</td>
                                <td>{abilities}</td>
                                <td>{selectedPokemon.stats[0].base_stat}</td>
                                <td>{selectedPokemon.stats[1].base_stat}</td>
                                <td>{selectedPokemon.stats[2].base_stat}</td>
                            </tr>
                        </tbody>
                    </table>
                    <NavLink to="/">Retour à la liste des pokemons</NavLink>
                </section>
            )
        )
    );
}