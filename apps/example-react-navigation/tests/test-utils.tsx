import { ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react-native"
import { RootStoreProvider } from "../src/contexts/RootStoreContext"

// Don't need to wrap SafeAreaProvider
const AllTheProviders = ({ children }: { children: ReactElement }) => {
  return <RootStoreProvider>{children}</RootStoreProvider>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from "@testing-library/react-native"

// override render method
export { customRender as render }
