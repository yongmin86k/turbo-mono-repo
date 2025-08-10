import { Spacer } from "@local/react-native-shared-ui"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { defaultTheme, ListItem, Image } from "@rn-vui/base"
import { upperFirst } from "lodash"
import { Pokemon } from "pokenode-ts"
import { RootStackParamList } from "../../models/routes.model"
import { ROUTES } from "../../navigations/Routes"
import { getPokemonImageUrl, getPokemonType } from "../../utils/helpers"
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native"
import { useCallback } from "react"
import { toggleFavourite } from "../../stores/favouriteStore"
import { useRootStore } from "../../stores/rootStore"

interface Props {
  item: Pokemon
  onPress?: (id: number) => void
}

export default function PokemonListItem({ item, onPress }: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const { useFavouriteStore } = useRootStore()
  const isFaved = useFavouriteStore((state) => state.isFaved(item.id))

  const getImage = useCallback(() => getPokemonImageUrl(item), [])

  return (
    <ListItem
      containerStyle={styles.list}
      onPress={() =>
        onPress ? onPress(item.id) : navigation.navigate(ROUTES.DETAILS, { pokemon: item })
      }
    >
      <Image
        source={{ uri: getImage() }}
        containerStyle={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />

      <ListItem.Content>
        <ListItem.Title>
          No. {item.id} {upperFirst(item.name)}
        </ListItem.Title>

        <Spacer height={2} />

        <ListItem.Subtitle style={{ color: defaultTheme.colors.grey3 }}>
          Type: {getPokemonType(item)}
        </ListItem.Subtitle>
      </ListItem.Content>

      <TouchableOpacity
        onPress={() => toggleFavourite(item.id)}
        hitSlop={16}
        style={{ alignSelf: "center" }}
      >
        <ListItem.Chevron
          type="font-awesome"
          name={isFaved ? "heart" : "heart-o"}
          color={isFaved ? defaultTheme.colors.secondary : defaultTheme.colors.grey3}
        />
      </TouchableOpacity>
    </ListItem>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 52,
    width: 52,
  },
  list: {
    backgroundColor: "transparent",
    paddingHorizontal: 24,
  },
})
