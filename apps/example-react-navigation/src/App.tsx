import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import RootStack from "./navigations/RootStack"
import navigationService from "./utils/navigationService"
import { RootStoreProvider } from "./contexts/RootStoreContext"

export default function App() {
  return (
    <RootStoreProvider>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationService.ref}>
          <RootStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </RootStoreProvider>
  )
}
