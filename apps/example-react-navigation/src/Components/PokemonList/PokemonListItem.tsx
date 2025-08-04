import { Spacer } from "@local/react-native-shared-ui"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { defaultTheme, ListItem, Image } from "@rneui/base"
import { upperFirst } from "lodash"
import { Pokemon } from "pokenode-ts"
import { HomeStackParamList } from "../../models/routes.model"
import { ROUTES } from "../../navigations/Routes"
import { getPokemonImageUrl, getPokemonType } from "../../utils/helpers"
import { ActivityIndicator, StyleSheet } from "react-native"
import { useCallback } from "react"
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content"

interface Props {
  item: Pokemon
}

export default function PokemonListItem({ item }: Props) {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>()

  const getImage = useCallback(() => getPokemonImageUrl(item), [])

  return (
    <ListItem
      containerStyle={styles.list}
      onPress={() => navigation.navigate(ROUTES.DETAILS, { pokemon: item })}
    >
      <Image
        source={{ uri: getImage() }}
        containerStyle={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />

      <ListItemContent>
        <ListItem.Title>
          No. {item.id} {upperFirst(item.name)}
        </ListItem.Title>

        <Spacer height={2} />

        <ListItem.Subtitle style={{ color: defaultTheme.colors.grey3 }}>
          Type: {getPokemonType(item)}
        </ListItem.Subtitle>
      </ListItemContent>
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
