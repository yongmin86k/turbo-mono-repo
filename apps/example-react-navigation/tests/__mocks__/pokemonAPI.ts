import pokemonList from "./mockdata-listPokemons.json"
import pokemon1 from "./mockdata-getPokemonByName-1.json"
import pokemon2 from "./mockdata-getPokemonByName-2.json"
import pokemon3 from "./mockdata-getPokemonByName-3.json"

jest.mock("pokenode-ts")

export const POKEMON_API = {
  getPokemonByName: jest
    .fn()
    .mockResolvedValueOnce(pokemon1)
    .mockResolvedValueOnce(pokemon2)
    .mockResolvedValueOnce(pokemon3)
    .mockResolvedValue(pokemon1),
  listPokemons: jest.fn().mockResolvedValue(pokemonList),
}
