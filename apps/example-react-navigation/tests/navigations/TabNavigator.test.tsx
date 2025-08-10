import { NavigationContainer } from "@react-navigation/native"
import { act, render, screen, userEvent } from "../test-utils"
import RootStack from "../../src/navigations/RootStack"
import { ROUTES } from "../../src/navigations/Routes"

jest.useFakeTimers()

describe("TabNavigator", () => {
  beforeAll(() => {
    jest.spyOn(global.console, "log").mockImplementation(() => jest.fn())
  })

  afterAll(() => {
    jest.resetAllMocks()
  })

  it(`should navigate to screens by tab bar buttons`, async () => {
    const user = userEvent.setup()

    render(
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>,
    )

    const SignUpButton = screen.getByLabelText("Sign Up, tab, 2 of 2")

    await user.press(SignUpButton)

    await act(() => {
      jest.runAllTimers()
    })

    const SignUpScreen = screen.getByTestId(ROUTES.SIGN_UP)

    expect(SignUpScreen).toBeVisible()

    const SignInButton = screen.getByLabelText("Sign In, tab, 1 of 2")

    await user.press(SignInButton)

    await act(() => {
      jest.runAllTimers()
    })

    const SignInScreen = screen.getByTestId(ROUTES.SIGN_IN)

    expect(SignInScreen).toBeVisible()
  })
})
