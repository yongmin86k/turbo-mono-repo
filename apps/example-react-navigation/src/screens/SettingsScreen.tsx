import { View, StyleSheet } from "react-native"
import { ROUTES } from "../navigations/Routes"
import useLifeCycleLog from "../hooks/useLifeCycleLog"
import { Button } from "@rn-vui/base"
import { useRootStore } from "../stores/rootStore"

export default function SettingsScreen() {
  const { useAuthStore } = useRootStore()
  const setToken = useAuthStore((state) => state.setToken)

  useLifeCycleLog(ROUTES.SETTINGS)

  return (
    <View testID={ROUTES.SETTINGS} style={styles.view}>
      <Button title="Sign out" size="lg" onPress={() => setToken(null)} />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
})
