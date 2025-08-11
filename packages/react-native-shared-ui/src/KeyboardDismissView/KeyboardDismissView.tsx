import React from "react"
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native"

interface Props {
  testID?: string
  containerStyle?: StyleProp<ViewStyle>
  scrollEnabled?: boolean
}

export default function KeyboardDismissView({
  children,
  testID,
  containerStyle,
  scrollEnabled,
}: React.PropsWithChildren<Props>) {
  return (
    <SafeAreaView testID={testID} style={styles.view}>
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
