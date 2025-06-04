import { PokemonContext, PokemonProvider } from "~/contexts/pokemon/PokemonContext";
import type { Route } from "../../+types/root";
import PokemonView from "~/pages/PokemonView";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Pokemons"},
        {name: "description", content: "La liste des pokemons"}
    ];
}

export default function PokemonList()  {
    return (
        <PokemonProvider>
            <PokemonView></PokemonView>
        </PokemonProvider>
    );
}