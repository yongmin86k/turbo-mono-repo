import { NavigationContainer } from "@react-navigation/native"
import { act, render, screen, userEvent, waitFor } from "../test-utils"
import RootStack from "../../src/navigations/RootStack"
import { ROUTES } from "../../src/navigations/Routes"

jest.useFakeTimers()

describe("RootStack", () => {
  beforeAll(() => {
    jest.spyOn(global.console, "log").mockImplementation(() => jest.fn())
  })

  afterAll(() => {
    jest.resetAllMocks()
  })

  it(`should render the Sign In screen as default screen if auth token doesn't exist`, async () => {
    render(
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>,
    )

    await waitFor(() => {
      expect(screen.getByTestId(ROUTES.SIGN_IN)).toBeVisible()
    })
  })

  it(`should navigate to Sign Up screen by tab bar button press`, async () => {
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

    const newRenderedScreen = screen.getByTestId(ROUTES.SIGN_UP)

    expect(newRenderedScreen).toBeVisible()
  })
})
