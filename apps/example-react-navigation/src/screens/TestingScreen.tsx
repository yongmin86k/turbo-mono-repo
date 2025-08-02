import { Input } from "@rneui/base"
import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native"

export default function TestingScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "blue" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          // contentContainerStyle={{ flex: 1 }}
          behavior="padding"
        >
          <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={{ backgroundColor: "yellow", flexDirection: "column-reverse", flex: 1 }}>
              <Text>Testing screen</Text>

              <Input placeholder="Type here..." />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}
