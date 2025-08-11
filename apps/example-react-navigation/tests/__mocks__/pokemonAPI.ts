import pokemonList from "./mockdata-listPokemons.json"
import pokemon1 from "./mockdata-getPokemonByName-1.json"
import pokemon2 from "./mockdata-getPokemonByName-2.json"
import pokemon3 from "./mockdata-getPokemonByName-3.json"

jest.mock("pokenode-ts")

export const POKEMON_API = jest.fn().mockImplementation(() => {
  return {
    getPokemonByName: jest
      .fn()
      .mockImplementationOnce(() => pokemon1)
      .mockImplementationOnce(() => pokemon2)
      .mockImplementationOnce(() => pokemon3),
    listPokemons: jest.fn().mockImplementation(() => pokemonList),
  }
})
