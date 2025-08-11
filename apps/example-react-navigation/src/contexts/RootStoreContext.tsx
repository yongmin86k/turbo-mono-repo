import { createContext, PropsWithChildren, useRef } from "react"
import { createRootStore } from "../stores/rootStore"

type RootStoreContextProps = ReturnType<typeof createRootStore>

export const RootStoreContext = createContext<RootStoreContextProps | undefined>(undefined)

export function RootStoreProvider({ children }: PropsWithChildren<{}>) {
  const ref = useRef<RootStoreContextProps>(undefined)

  if (!ref.current) {
    ref.current = createRootStore()
  }

  return <RootStoreContext.Provider value={ref.current}>{children}</RootStoreContext.Provider>
}
