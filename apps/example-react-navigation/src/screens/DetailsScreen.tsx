import { Text, TouchableOpacity, View, StyleSheet, SafeAreaView, ScrollView } from "react-native"
import { HomeStackParamList, HomeStackScreenProps } from "../models/routes.model"
import { ROUTES } from "../navigations/Routes"
import { RouteProp, useRoute } from "@react-navigation/native"
import { useEffect, useMemo } from "react"
import { upperFirst } from "lodash"
import { Avatar, defaultTheme } from "@rneui/base"
import { getPokemonImageUrl, getPokemonType } from "../Utils/helpers"
import { Spacer } from "@local/react-native-shared-ui"

type Props = HomeStackScreenProps<ROUTES.DETAILS>

export default function DetailScreen(props: Props) {
  const {
    params: { pokemon },
  } = useRoute<RouteProp<HomeStackParamList, ROUTES.DETAILS>>()
  const imageUri = useMemo(() => getPokemonImageUrl(pokemon), [pokemon])

  const setNavigationOptions = () => {
    props.navigation.setOptions({
      headerShown: true,
      title: upperFirst(pokemon.name ?? "Details"),
      headerLeft: () => (
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      ),
    })
  }

  useEffect(() => {
    setNavigationOptions()
  }, [])

  return (
    <SafeAreaView style={styles.view}>
      <ScrollView style={styles.view} contentContainerStyle={styles.scrollView}>
        <View style={styles.textGroup}>
          <Text>Swipe to close is disabled.</Text>
          <Text>To close the modal, please press the close button.</Text>
        </View>

        <Spacer height={24} />

        <View style={styles.contentGroup}>
          <Avatar size={160} rounded source={{ uri: imageUri }} containerStyle={styles.avatar} />

          <Spacer />

          <Text style={styles.titleGroup}>
            <Text style={styles.name}>{upperFirst(pokemon.name)}</Text>{" "}
            <Text style={styles.number}>#{pokemon.id}</Text>
          </Text>

          <Spacer height={4} />

          <Text>Type: {getPokemonType(pokemon)}</Text>

          <Spacer height={200} />

          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: defaultTheme.colors.grey5,
    padding: 24,
  },
  closeButtonText: {
    color: defaultTheme.colors.primary,
  },
  contentGroup: {
    alignItems: "center",
  },
  name: {
    color: defaultTheme.colors.black,
  },
  number: {
    color: defaultTheme.colors.grey3,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  textGroup: {
    alignItems: "center",
  },
  titleGroup: {
    fontSize: 36,
    fontWeight: "bold",
  },
  view: {
    flex: 1,
  },
})
