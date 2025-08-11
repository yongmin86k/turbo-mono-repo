import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer"
import SettingsScreen from "../screens/SettingsScreen"
import { ROUTES } from "./Routes"
import { DrawerParamList } from "../models/routes.model"
import { TouchableOpacity } from "react-native"
import IconWrapper from "../components/IconWrapper"
import HomeScreen from "../screens/HomeScreen"
import FavouritesScreen from "../screens/FavouritesScreen"
import { useRootStore } from "../stores/rootStore"
import { isTestENV } from "../utils/helpers"

const Drawer = createDrawerNavigator<DrawerParamList>()

export default function DrawerNavigator() {
  const { useAuthStore } = useRootStore()
  const setToken = useAuthStore((state) => state.setToken)

  return (
    <Drawer.Navigator
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity testID="logout-button" onPress={() => setToken(null)}>
            <IconWrapper name="sign-out-alt" size={22} />
          </TouchableOpacity>
        ),
        headerRightContainerStyle: {
          paddingRight: 16,
        },
        drawerStatusBarAnimation: isTestENV ? "none" : undefined,
      }}
      drawerContent={(props) => (
        <DrawerContentScrollView testID="drawer-content" {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />

      <Drawer.Screen
        name={ROUTES.FAVOURITES}
        component={FavouritesScreen}
        options={{
          title: "Favourites",
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
