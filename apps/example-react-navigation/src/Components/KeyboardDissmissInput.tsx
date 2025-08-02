import { Input, InputProps } from "@rneui/base"
import { Keyboard, StyleSheet } from "react-native"

interface Props extends Omit<InputProps, "ref"> {
  type?: "email" | "password"
}

export default function KeyboardDissmissInput(props: Props) {
  let defaultProps: Omit<Partial<InputProps>, "ref"> | undefined

  switch (props.type) {
    case "email":
      defaultProps = {
        autoCapitalize: "none",
        leftIcon: { type: "font-awesome-5", name: "envelope" },
        keyboardType: "email-address",
        textContentType: "emailAddress",
      }
      break
    case "password":
      defaultProps = {
        secureTextEntry: true,
        leftIcon: { type: "font-awesome-5", name: "lock" },
        textContentType: "password",
      }
      break
    default:
      defaultProps = undefined
  }

  return (
    <Input
      clearButtonMode="while-editing"
      returnKeyType="done"
      onSubmitEditing={Keyboard.dismiss}
      onEndEditing={Keyboard.dismiss}
      {...defaultProps}
      leftIconContainerStyle={
        defaultProps?.leftIcon || props.leftIcon ? styles.iconContainerStyle : undefined
      }
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  iconContainerStyle: {
    marginRight: 12,
  },
})
