import { createDrawerNavigator } from '@react-navigation/drawer'
import SettingsScreen from '../screens/SettingsScreen'
import { ROUTES } from './Routes'
import HomeStack from './HomeStack'

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={ROUTES.HOME_STACK} component={HomeStack} />
      <Drawer.Screen name={ROUTES.SETTINGS} component={SettingsScreen} />
    </Drawer.Navigator>
  )
}
