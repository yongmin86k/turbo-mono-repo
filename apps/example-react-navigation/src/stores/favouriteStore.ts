import { create } from "zustand"

interface FavouriteState {
  favourites: Set<number>
}

interface FavouriteActions {
  isFaved: (id: number) => boolean
}

export const useFavouriteStore = create<FavouriteState & FavouriteActions>()((set, get) => ({
  favourites: new Set<number>(),
  isFaved: (id: number) => get().favourites.has(id),
}))

export const toggleFavourite = (id: number): void => {
  useFavouriteStore.setState((prev) => {
    const previous = prev.favourites
    const hasId = previous.has(id)
    const newSet = new Set(prev.favourites)

    if (hasId) {
      console.log(`Removing FavId: ${id}`)
      newSet.delete(id)
    } else {
      console.log(`Adding FavId: ${id}`)
      newSet.add(id)
    }

    return {
      favourites: newSet,
    }
  })
}
