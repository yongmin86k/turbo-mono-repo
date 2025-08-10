import { ROUTES } from "../navigations/Routes"
import useLifeCycleLog from "../hooks/useLifeCycleLog"
import { Pokemon } from "pokenode-ts"
import PokemonList from "../components/PokemonList/PokemonList"
import { useEffect, useState } from "react"
import navigationService from "../utils/navigationService"
import { useRootStore } from "../stores/rootStore"

export default function FavouritesScreen() {
  const { usePokemonStore } = useRootStore()
  const pokemons = usePokemonStore((state) => state.pokemons)
  const { useFavouriteStore } = useRootStore()
  const favourites = useFavouriteStore((state) => state.favourites)

  const [favPokemons, setFavPokemons] = useState(new Map<number, Pokemon>())

  useEffect(() => {
    const newFavs = new Map<number, Pokemon>()

    favourites.forEach((value) => {
      const pokemon = pokemons.get(value)
      if (pokemon) {
        newFavs.set(pokemon.id, pokemon)
      }
    })

    setFavPokemons(newFavs)
  }, [pokemons, favourites])
  useLifeCycleLog(ROUTES.FAVOURITES)

  return (
    <PokemonList
      pokemons={favPokemons}
      isLoading={false}
      onPress={(id) => {
        const pokemon = favPokemons.get(id)

        if (pokemon) {
          navigationService.goToDetails({
            pokemon,
          })
        }
      }}
    />
  )
}
