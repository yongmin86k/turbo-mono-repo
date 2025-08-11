import { create, createStore, StateCreator } from "zustand"
import { useAuthStore } from "./authStore"
import { useFavouriteStore } from "./favouriteStore"
import { usePokemonStore } from "./pokemonStore"

export type RootStoreState = {
  useAuthStore: typeof useAuthStore
  useFavouriteStore: typeof useFavouriteStore
  usePokemonStore: typeof usePokemonStore
}

export const rootStoreCreator: StateCreator<RootStoreState> = () => ({
  useAuthStore,
  useFavouriteStore,
  usePokemonStore,
})

export const useRootStore = create<RootStoreState>()(rootStoreCreator)

export const createRootStore = () => {
  return createStore<RootStoreState>(rootStoreCreator)
}
