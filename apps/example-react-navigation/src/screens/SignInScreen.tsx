import { Button, defaultTheme, Input } from '@rneui/base'
import { useMemo, useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

export default function SignInScreen() {
  const [email, setEmail] = useState<string>()
  const disabled = useMemo(() => !email || email.trim().length === 0, [email])

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.twfStyle}>
        <View style={styles.viewStyle}>
          <Text style={styles.text}>Please login with email</Text>

          <Input
            placeholder="Email"
            autoFocus
            autoCapitalize="none"
            leftIcon={{ type: 'font-awesome-5', name: 'envelope' }}
            leftIconContainerStyle={styles.iconContainerStyle}
            clearButtonMode="while-editing"
            value={email}
            keyboardType="email-address"
            textContentType="emailAddress"
            returnKeyType="done"
            onSubmitEditing={Keyboard.dismiss}
            onEndEditing={Keyboard.dismiss}
            onChangeText={(text) => setEmail(text)}
          />

          <Button
            title="Login"
            disabled={disabled}
            buttonStyle={[
              styles.buttonContainerStyle,
              { backgroundColor: defaultTheme.colors.primary },
            ]}
            radius={999}
            icon={{
              type: 'font-awesome',
              name: 'send-o',
              color: disabled ? defaultTheme.colors.grey3 : defaultTheme.colors.white,
            }}
            iconContainerStyle={styles.iconContainerStyle}
            onPress={() => {
              console.log('Login with email:', email)
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  twfStyle: {
    flex: 1,
  },
  twfContainerStyle: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  text: {
    fontWeight: 'bold',
  },
  iconContainerStyle: {
    marginRight: 12,
  },
  buttonContainerStyle: {
    paddingVertical: 16,
    paddingLeft: 8,
    paddingRight: 16,
  },
  something: {
    padding: 10,
  },
})
