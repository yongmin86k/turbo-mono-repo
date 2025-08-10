import { NavigationContainer } from "@react-navigation/native"
import { act, fireEvent, render, screen, userEvent, waitFor } from "../test-utils"
import RootStack from "../../src/navigations/RootStack"
import { ROUTES } from "../../src/navigations/Routes"
import { createRootStore, RootStoreState } from "../../src/stores/rootStore"
import { StoreApi } from "zustand"
import { authStoreCreator, useAuthStore } from "../../src/stores/authStore"

jest.useFakeTimers()

describe("DrawerNavigator", () => {
  let store: StoreApi<RootStoreState>

  beforeAll(async () => {
    jest.spyOn(global.console, "log").mockImplementation(() => jest.fn())

    store = createRootStore()

    // Tab Navigator -> Login
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
    const InputEmail = screen.getByTestId("signup-input-email")
    const InputPassword = screen.getByTestId("signup-input-password")
    const InputConfirm = screen.getByTestId("signup-input-confirm")
    const ButtonSubmit = screen.getByTestId("signup-button-submit")

    fireEvent(InputEmail, "onChangeText", "userEmail@test.com")
    fireEvent(InputPassword, "onChangeText", "1111")
    fireEvent(InputConfirm, "onChangeText", "1111")
    await user.press(ButtonSubmit)
  })

  afterAll(() => {
    jest.resetAllMocks()
  })

  it(`should render the Home screen as default screen if auth token exists`, () => {
    const { useAuthStore } = store.getState()
    const token = useAuthStore.getState().token

    expect(screen.getByTestId(ROUTES.HOME)).toBeVisible()
    expect(token).toBeDefined()
  })
})
