import { useEffect, useState } from "react"
import { setMappedPokemons, usePokemonStore } from "../stores/pokemonStore"
import { POKEMON_API } from "../APIs/pokemonAPI"
import { chunk } from "lodash"
import { Pokemon } from "pokenode-ts"
import PokemonList from "../Components/PokemonList/PokemonList"

export default function HomeScreen() {
  const pokemons = usePokemonStore((state) => state.pokemons)
  const [isLoading, setIsLoading] = useState(false)

  const fetchPokemons = async () => {
    const startDate = new Date()

    try {
      setIsLoading(true)

      const pokemonList = await POKEMON_API.listPokemons()

      if (pokemonList.count > 0) {
        const chunkedData = chunk(pokemonList.results, 50)

        const mappedPokemons = new Map<number, Pokemon>()

        for (const batch of chunkedData) {
          const promises = batch.map((item) => POKEMON_API.getPokemonByName(item))

          const res = await Promise.all(promises)

          res.forEach((pokemon) => {
            mappedPokemons.set(pokemon.id, pokemon)
          })
        }

        setMappedPokemons(mappedPokemons)
      }
    } catch (error) {
      console.error(error)
    } finally {
      const endDate = new Date()
      const timeDiff = endDate.getTime() - startDate.getTime()

      setIsLoading(false)

      console.log(`fetchPokemons took: ${timeDiff} ms`)
    }
  }

  useEffect(() => {
    console.log("HomeScreen mounted")
    fetchPokemons()
  }, [])

  return <PokemonList pokemons={pokemons} isLoading={isLoading} />
}
