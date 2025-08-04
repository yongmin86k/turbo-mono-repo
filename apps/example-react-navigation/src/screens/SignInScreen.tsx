import { Button, defaultTheme } from "@rneui/base"
import { useMemo, useState } from "react"
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native"
import { KeyboardDismissView, Spacer } from "@local/react-native-shared-ui"
import { TabNavigatorProps } from "../models/routes.model"
import { ROUTES } from "../navigations/Routes"
import KeyboardDissmissInput from "../components/KeyboardDissmissInput"
import useLifeCycleLog from "../hooks/useLifeCycleLog"

export default function SignInScreen(props: TabNavigatorProps<ROUTES.SIGN_IN>) {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const disabled = useMemo(() => !email || email.trim().length === 0, [email])

  useLifeCycleLog(ROUTES.SIGN_IN)

  return (
    <KeyboardDismissView scrollEnabled containerStyle={styles.viewStyle}>
      <Text style={styles.defaultText}>Please login with email</Text>

      <Spacer height={24} />

      <KeyboardDissmissInput
        type="email"
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Spacer />

      <KeyboardDissmissInput
        type="password"
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Spacer height={80} />

      <Button
        title="Login"
        disabled={disabled}
        buttonStyle={[
          styles.buttonContainerStyle,
          { backgroundColor: defaultTheme.colors.primary },
        ]}
        radius={999}
        icon={{
          type: "font-awesome",
          name: "send-o",
          color: disabled ? defaultTheme.colors.grey3 : defaultTheme.colors.white,
        }}
        iconContainerStyle={styles.iconContainerStyle}
        onPress={() => {
          Alert.alert("Email not found", "Please register first.")
        }}
      />

      <Spacer />

      <TouchableOpacity
        onPress={() => props.navigation.jumpTo(ROUTES.SIGN_UP, { email, password })}
      >
        <Text style={styles.linkText}>Don't have an account?</Text>
      </TouchableOpacity>
    </KeyboardDismissView>
  )
}

const styles = StyleSheet.create({
  buttonContainerStyle: {
    paddingLeft: 8,
    paddingRight: 16,
    paddingVertical: 16,
  },
  defaultText: {
    fontWeight: "bold",
  },
  iconContainerStyle: {
    marginRight: 12,
  },
  linkText: {
    color: defaultTheme.colors.primary,
  },
  viewStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
})
