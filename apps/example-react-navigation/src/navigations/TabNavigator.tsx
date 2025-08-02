import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import SignInScreen from "../screens/SignInScreen"
import SignUpScreen from "../screens/SignUpScreen"
import { ROUTES } from "./Routes"
import Icon from "../Components/Icon"
import { TabParamList } from "../models/routes.model"
import { defaultTheme } from "@rneui/base"

const Tab = createBottomTabNavigator<TabParamList>()

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        animation: "shift",
        tabBarActiveTintColor: defaultTheme.colors.primary,
        tabBarInactiveTintColor: defaultTheme.colors.grey3,
      }}
    >
      <Tab.Screen
        name={ROUTES.SIGN_IN}
        component={SignInScreen}
        options={{
          title: "Sign In",
          tabBarIcon: ({ color }) => <Icon name="user-alt" color={color} size={16} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.SIGN_UP}
        component={SignUpScreen}
        options={{
          title: "Sign Up",
          tabBarIcon: ({ color }) => <Icon name="user-plus" color={color} size={16} />,
        }}
      />
    </Tab.Navigator>
  )
}
