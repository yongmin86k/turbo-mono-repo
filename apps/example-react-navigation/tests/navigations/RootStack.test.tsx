import { NavigationContainer } from "@react-navigation/native"
import { render, screen, waitFor } from "../test-utils"
import RootStack from "../../src/navigations/RootStack"
import { ROUTES } from "../../src/navigations/Routes"

// jest.useFakeTimers()

describe("RootStack", () => {
  it(`should render the Sign In screen as default screen if auth token doesn't exist`, async () => {
    render(
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>,
    )

    await waitFor(() => {
      expect(screen.getByTestId(ROUTES.SIGN_IN)).toBeTruthy()
    })
  })
})
