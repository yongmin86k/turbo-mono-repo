import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import RootStack from "./navigations/RootStack"
import TestingScreen from "./screens/TestingScreen"

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
        {/* <TestingScreen /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
