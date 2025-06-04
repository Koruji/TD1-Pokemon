import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "~/contexts/pokemon/PokemonContext";

 
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
                <section>
                    <div>
                        <h1>Liste de pokémons</h1>
                        <ul>
                            {pokemons.map((pokemon, index) => (
                                <li key={index}>{pokemon.name}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            )
        )      
    );
}