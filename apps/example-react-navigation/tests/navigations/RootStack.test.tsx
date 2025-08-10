import { NavigationContainer } from "@react-navigation/native"
import { render } from "../test-utils"
import RootStack from "../../src/navigations/RootStack"

// jest.useFakeTimers()

describe("RootStack", () => {
  it(`should render the TabNavigator if auth token doesn't exist`, () => {
    render(
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>,
    )

    // expect(authStore.token).toBeNull()
  })
})
