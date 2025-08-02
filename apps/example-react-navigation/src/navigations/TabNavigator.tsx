import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import { ROUTES } from './Routes'

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ROUTES.SIGN_IN}
        component={SignInScreen}
        options={{
          tabBarIcon: () => <FontAwesome5 name="user-alt" />,
        }}
      />
      <Tab.Screen
        name={ROUTES.SIGN_UP}
        component={SignUpScreen}
        options={{
          tabBarIcon: () => <FontAwesome5 name="user-plus" />,
        }}
      />
    </Tab.Navigator>
  )
}
