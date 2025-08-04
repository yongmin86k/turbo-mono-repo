import { Pokemon } from "pokenode-ts"

export const getPokemonImageUrl = (pokemon: Pokemon): string | undefined => {
  return (
    pokemon.sprites.other?.["official-artwork"].front_default ||
    pokemon.sprites.front_default ||
    undefined
  )
}

export const getPokemonType = (pokemon: Pokemon) => {
  return pokemon.types.map((t) => t.type.name).join(", ")
}
