import { Text, View } from "react-native"
import { ROUTES } from "../navigations/Routes"
import useLifeCycleLog from "../hooks/useLifeCycleLog"

export default function SettingsScreen() {
  useLifeCycleLog(ROUTES.SETTINGS)

  return (
    <View>
      <Text>Setting screen</Text>
    </View>
  )
}
