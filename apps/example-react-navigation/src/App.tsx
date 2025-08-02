import { NavigationContainer } from '@react-navigation/native'
import RootStack from './navigations/RootStack'

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}
