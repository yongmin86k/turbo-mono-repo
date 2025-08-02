import { PropsWithChildren } from "react"
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

interface Props {
  containerStyle?: StyleProp<ViewStyle>
  scrollEnabled?: boolean
}

export default function KeyboardDismissView({
  children,
  containerStyle,
  scrollEnabled,
}: PropsWithChildren<Props>) {
  return (
    <SafeAreaView style={styles.view}>
      <KeyboardAvoidingView
        style={styles.view}
        contentContainerStyle={styles.view}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.view}>
          {scrollEnabled ? (
            <ScrollView contentContainerStyle={[styles.view, containerStyle]}>
              {children}
            </ScrollView>
          ) : (
            <View style={[styles.view, containerStyle]}>{children}</View>
          )}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
})
