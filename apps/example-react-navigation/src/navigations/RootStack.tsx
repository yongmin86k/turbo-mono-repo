import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DrawerNavigator from "./DrawerNavigator"
import TabNavigator from "./TabNavigator"
import { RootStackParamList } from "../models/routes.model"
import { ROUTES } from "./Routes"
import DetailScreen from "../screens/DetailsScreen"
import { useRootStore } from "../stores/rootStore"

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootStack() {
  const { useAuthStore } = useRootStore()
  const token = useAuthStore((state) => state.token)

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {token ? (
        <Stack.Group>
          <Stack.Screen name={ROUTES.DRAWER} component={DrawerNavigator} />

          <Stack.Screen
            name={ROUTES.DETAILS}
            component={DetailScreen}
            options={{
              headerShown: true,
              presentation: "modal",
              gestureEnabled: false,
            }}
          />
        </Stack.Group>
      ) : (
        <Stack.Screen name={ROUTES.TAB} component={TabNavigator} />
      )}
    </Stack.Navigator>
  )
}
