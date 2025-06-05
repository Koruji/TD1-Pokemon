import { PokemonProvider } from "~/contexts/pokemon/PokemonContext";
import type { Route } from "../../+types/root";
import PokemonDetailView from "~/pages/PokemonDetailView";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Pokemon"},
        {name: "description", content: "Detail d'un pokemon"}
    ];
}

export default function PokemonList()  {
    return (
        <PokemonProvider>
            <PokemonDetailView></PokemonDetailView>
        </PokemonProvider>
    );
}