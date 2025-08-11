import { NavigationContainer } from "@react-navigation/native"
import { act, fireEvent, render, screen, userEvent, within } from "../test-utils"
import RootStack from "../../src/navigations/RootStack"
import { ROUTES } from "../../src/navigations/Routes"
import { createRootStore, RootStoreState } from "../../src/stores/rootStore"
import { StoreApi } from "zustand"

jest.mock("../../src/api/pokemonAPI")
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

    // Check token
    const { useAuthStore } = store.getState()
    const { token } = useAuthStore.getState()
    expect(token).toBeDefined()
  })

  afterAll(() => {
    jest.resetAllMocks()
  })

  it(`should render the Home screen as default screen`, () => {
    expect(screen.getByTestId(ROUTES.HOME)).toBeVisible()
  })

  it(`should open and close the drawer by menu button`, async () => {
    const user = userEvent.setup()
    const DrawerToggleButton = screen.getByLabelText("Show navigation menu")

    expect(screen.getByTestId(ROUTES.HOME)).toBeVisible()

    // Open drawer
    await user.press(DrawerToggleButton)
    await act(() => {
      jest.runAllTimers()
    })

    // Checking drawer-content component doesn't work, because it's rendered on the top of screen
    expect(screen.queryByTestId(ROUTES.HOME)).toBeNull()

    // Close drawer
    await user.press(DrawerToggleButton)
    await act(() => {
      jest.runAllTimers()
    })

    expect(screen.getByTestId(ROUTES.HOME)).toBeVisible()
  })

  it(`should navigate to the Favourites screen by drawer items`, () => {
    const user = userEvent.setup()
    const DrawerMenuButton = screen.getByLabelText("Show navigation menu")

    console.log(screen)
  })
})
