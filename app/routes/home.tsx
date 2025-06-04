import type { Route } from "./+types/home";
import PokemonList from "./pokemon/pokemon-list";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <PokemonList/>;
}
