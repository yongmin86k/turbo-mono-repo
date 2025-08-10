import { JSX } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { render, RenderOptions } from "@testing-library/react-native"

const AllTheProviders = ({ children }: { children: JSX.Element }) => {
  return <SafeAreaProvider>{children}</SafeAreaProvider>
}

const customRender = (ui: JSX.Element, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from "@testing-library/react-native"

// override render method
export { customRender as render }
