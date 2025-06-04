import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    ...prefix("pokemon", [
        index("routes/pokemon/pokemon-list.tsx"),
        route(":pokemonName", "routes/pokemon/pokemon-detail.tsx")
    ])
] satisfies RouteConfig;
