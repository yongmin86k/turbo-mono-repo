import { Pokemon } from "pokenode-ts"
import { create } from "zustand"

interface pokemonState {
  pokemons: Map<number, Pokemon>
}

export const usePokemonStore = create<pokemonState>()(() => ({
  pokemons: new Map<number, Pokemon>(),
}))

export const setMappedPokemons = (pokemons: Map<number, Pokemon>) => {
  usePokemonStore.setState(() => ({
    pokemons,
  }))
}
