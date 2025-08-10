import { Alert, StyleSheet, Text } from "react-native"
import { ROUTES } from "../navigations/Routes"
import { TabNavigatorProps, TabParamList } from "../models/routes.model"
import { Button, defaultTheme } from "@rn-vui/base"
import { useCallback, useState } from "react"
import { KeyboardDismissView, Spacer } from "@local/react-native-shared-ui"
import KeyboardDissmissInput from "../components/KeyboardDissmissInput"
import { RouteProp, useFocusEffect, useRoute } from "@react-navigation/native"
import useLifeCycleLog from "../hooks/useLifeCycleLog"
import { useRootStore } from "../stores/rootStore"

export default function SignUpScreen(props: TabNavigatorProps<ROUTES.SIGN_UP>) {
  const { params } = useRoute<RouteProp<TabParamList, ROUTES.SIGN_UP>>()
  const { useAuthStore } = useRootStore()
  const setToken = useAuthStore((state) => state.setToken)

  const [email, setEmail] = useState<string | undefined>(params?.email)
  const [password, setPassword] = useState<string | undefined>(params?.password)
  const [confirmPassword, setConfirmPassword] = useState<string>()

  const disabled =
    !email ||
    email.trim().length === 0 ||
    !password ||
    password.trim().length === 0 ||
    !confirmPassword ||
    confirmPassword.trim().length === 0

  const signUp = useCallback(() => {
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match")
    } else {
      console.log("Sign up with email:", email)
      const token = new Date().toISOString()
      setToken(token)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password, confirmPassword, email])

  useFocusEffect(
    useCallback(() => {
      setEmail(params?.email)
      setPassword(params?.password)

      return () => {
        setEmail(undefined)
        setPassword(undefined)
        setConfirmPassword(undefined)
      }
    }, [params]),
  )

  useLifeCycleLog(ROUTES.SIGN_UP)

  return (
    <KeyboardDismissView testID={ROUTES.SIGN_UP} containerStyle={styles.viewStyle}>
      <Text>Please register with email</Text>

      <Spacer height={24} />

      <KeyboardDissmissInput
        type="email"
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Spacer />

      <Text>Confirm your password</Text>

      <Spacer />

      <KeyboardDissmissInput
        type="password"
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Spacer />

      <KeyboardDissmissInput
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />

      <Spacer height={80} />

      <Button
        title="Sign Up"
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
        onPress={signUp}
      />
    </KeyboardDismissView>
  )
}

const styles = StyleSheet.create({
  buttonContainerStyle: {
    paddingLeft: 8,
    paddingRight: 16,
    paddingVertical: 16,
  },
  iconContainerStyle: {
    marginRight: 12,
  },
  viewStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
})
