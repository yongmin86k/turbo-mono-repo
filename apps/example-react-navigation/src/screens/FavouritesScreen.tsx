import { ROUTES } from "../navigations/Routes"
import useLifeCycleLog from "../hooks/useLifeCycleLog"
import { usePokemonStore } from "../stores/pokemonStore"
import { useFavouriteStore } from "../stores/favouriteStore"
import { Pokemon } from "pokenode-ts"
import PokemonList from "../components/PokemonList/PokemonList"
import { useEffect, useState } from "react"
import navigationService from "../utils/navigationService"

export default function FavouritesScreen() {
  const pokemons = usePokemonStore((state) => state.pokemons)
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
