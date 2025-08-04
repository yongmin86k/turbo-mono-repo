import { NamedAPIResource, PokemonClient } from "pokenode-ts"

function pokemonInstance() {
  const api = new PokemonClient()
  const defaultOffset = 0
  const defaultLimit = 99999

  return {
    getPokemonByName: async (pokemon: NamedAPIResource) => {
      return api.getPokemonByName(pokemon.name)
    },
    listPokemons: async () => {
      return api.listPokemons(defaultOffset, defaultLimit)
    },
    listTypes: async () => {
      return api.listTypes(defaultOffset, defaultLimit)
    },
  }
}

export const POKEMON_API = pokemonInstance()
