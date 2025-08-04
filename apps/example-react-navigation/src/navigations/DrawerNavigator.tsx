import { createDrawerNavigator } from "@react-navigation/drawer"
import SettingsScreen from "../screens/SettingsScreen"
import { ROUTES } from "./Routes"
import HomeStack from "./HomeStack"
import { DrawerParamList } from "../models/routes.model"
import { TouchableOpacity } from "react-native"
import IconWrapper from "../Components/IconWrapper"
import { useAuthStore } from "../stores/authStore"

const Drawer = createDrawerNavigator<DrawerParamList>()

export default function DrawerNavigator() {
  const setToken = useAuthStore((state) => state.setToken)

  return (
    <Drawer.Navigator
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity onPress={() => setToken(null)}>
            <IconWrapper name="sign-out-alt" size={22} />
          </TouchableOpacity>
        ),
        headerRightContainerStyle: {
          paddingRight: 16,
        },
      }}
    >
      <Drawer.Screen
        name={ROUTES.HOME_STACK}
        component={HomeStack}
        options={{
          title: "Home",
        }}
      />
      <Drawer.Screen
        name={ROUTES.SETTINGS}
        component={SettingsScreen}
        options={{
          title: "Settings",
        }}
      />
    </Drawer.Navigator>
  )
}
