import { useAuthStore } from '../stores/global'
import DrawerNavigator from './DrawerNavigator'
import TabNavigator from './TabNavigator'

export default function RootStack() {
  const token = useAuthStore((state) => state.token)

  return token ? <DrawerNavigator /> : <TabNavigator />
}
