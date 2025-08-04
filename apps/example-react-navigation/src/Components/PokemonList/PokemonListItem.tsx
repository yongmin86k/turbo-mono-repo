import { Spacer } from "@local/react-native-shared-ui"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { Avatar, defaultTheme, ListItem } from "@rneui/base"
import { upperFirst } from "lodash"
import { Pokemon } from "pokenode-ts"
import { TouchableOpacity } from "react-native"
import { HomeStackParamList } from "../../models/routes.model"
import { ROUTES } from "../../navigations/Routes"
import { getPokemonImageUrl, getPokemonType } from "../../Utils/helpers"

interface Props {
  item: Pokemon
}

export default function PokemonListItem({ item }: Props) {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>()

  const imageUri = getPokemonImageUrl(item)

  return (
    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.DETAILS, { pokemon: item })}>
      <ListItem containerStyle={{ backgroundColor: "transparent", paddingHorizontal: 24 }}>
        <Avatar source={{ uri: imageUri }} />

        <ListItem.Content>
          <ListItem.Title>
            No. {item.id} {upperFirst(item.name)}
          </ListItem.Title>

          <Spacer height={2} />

          <ListItem.Subtitle style={{ color: defaultTheme.colors.grey3 }}>
            Type: {getPokemonType(item)}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  )
}
