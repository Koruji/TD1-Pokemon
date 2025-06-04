export interface PokemonI {
    name: string,
    url: string
}

export interface PokemonResponseI {
    count: number,
    next: string,
    previous: string,
    results: PokemonI[]
}