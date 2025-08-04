import { NamedAPIResource, PokemonClient } from "pokenode-ts"

function pokemonInstance() {
  const pokemonApi = new PokemonClient()
  const defaultOffset = 0
  const defaultLimit = 99999

  return {
    getPokemonByName: async (pokemon: NamedAPIResource) => {
      return pokemonApi.getPokemonByName(pokemon.name)
    },
    listPokemons: async () => {
      return pokemonApi.listPokemons(defaultOffset, defaultLimit)
    },
  }
}

export const POKEMON_API = pokemonInstance()
