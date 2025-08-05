import { Text, TouchableOpacity, View, StyleSheet, SafeAreaView, ScrollView } from "react-native"
import { RootStackParamList, RootStackScreenProps } from "../models/routes.model"
import { ROUTES } from "../navigations/Routes"
import { RouteProp, useRoute } from "@react-navigation/native"
import { useEffect, useMemo } from "react"
import { upperFirst } from "lodash"
import { Avatar, defaultTheme, Icon } from "@rneui/base"
import { getPokemonImageUrl, getPokemonType } from "../utils/helpers"
import { Spacer } from "@local/react-native-shared-ui"
import useLifeCycleLog from "../hooks/useLifeCycleLog"
import { toggleFavourite, useFavouriteStore } from "../stores/favouriteStore"

export default function DetailScreen(props: RootStackScreenProps<ROUTES.DETAILS>) {
  const {
    params: { pokemon },
  } = useRoute<RouteProp<RootStackParamList, ROUTES.DETAILS>>()

  const isFaved = useFavouriteStore((state) => state.isFaved(pokemon.id))
  const imageUri = useMemo(() => getPokemonImageUrl(pokemon), [pokemon])

  const handleClose = props.navigation.goBack

  const setNavigationOptions = () => {
    props.navigation.setOptions({
      title: upperFirst(pokemon.name ?? "Details"),
      headerLeft: () => (
        <TouchableOpacity onPress={handleClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      ),
    })
  }

  useEffect(() => {
    setNavigationOptions()
  }, [])

  useLifeCycleLog(ROUTES.DETAILS)

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

          <Spacer />

          <Icon
            type="font-awesome"
            name={isFaved ? "heart" : "heart-o"}
            color={isFaved ? defaultTheme.colors.secondary : defaultTheme.colors.grey3}
            onPress={() => toggleFavourite(pokemon.id)}
          />

          <Spacer height={200} />

          <TouchableOpacity onPress={handleClose}>
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
