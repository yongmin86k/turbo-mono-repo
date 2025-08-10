import { useEffect, useState } from "react"
import { setMappedPokemons } from "../stores/pokemonStore"
import { POKEMON_API } from "../api/pokemonAPI"
import { chunk } from "lodash"
import { Pokemon } from "pokenode-ts"
import PokemonList from "../components/PokemonList/PokemonList"
import useLifeCycleLog from "../hooks/useLifeCycleLog"
import { ROUTES } from "../navigations/Routes"
import { useRootStore } from "../stores/rootStore"

export default function HomeScreen() {
  const { usePokemonStore } = useRootStore()
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
    fetchPokemons()
  }, [])

  useLifeCycleLog(ROUTES.HOME)

  return <PokemonList pokemons={pokemons} isLoading={isLoading} />
}
