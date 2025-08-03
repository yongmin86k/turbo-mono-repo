import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ROUTES } from "./Routes"
import HomeScreen from "../screens/HomeScreen"
import DetailScreen from "../screens/DetailsScreen"
import { HomeStackParamList } from "../models/routes.model"

const Stack = createNativeStackNavigator<HomeStackParamList>()

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name={ROUTES.DETAILS}
        component={DetailScreen}
        options={{
          title: "Details",
        }}
      />
    </Stack.Navigator>
  )
}
