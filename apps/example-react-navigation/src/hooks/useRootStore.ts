import { useContext } from "react"
import { useStore } from "zustand"
import { RootStoreState } from "../stores/rootStore"
import { RootStoreContext } from "../contexts/RootStoreContext"

export function useRootContext<T>(selector: (state: RootStoreState) => T): T {
  const store = useContext(RootStoreContext)

  if (!store) throw new Error("Missing RootStoreProvider in the tree")

  return useStore(store, selector)
}
