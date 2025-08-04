import { Avatar, ListItem } from "@rneui/base"
import { upperFirst } from "lodash"
import { Pokemon } from "pokenode-ts"
import { Text } from "react-native"

interface Props {
  item: Pokemon
}

export default function PokemonListItem({ item }: Props) {
  const imageUri =
    item.sprites.other?.["official-artwork"].front_default ||
    item.sprites.front_default ||
    undefined

  return (
    <ListItem bottomDivider>
      <Avatar source={{ uri: imageUri }} />

      <ListItem.Content>
        <ListItem.Title>
          <Text>
            No. {item.id} {upperFirst(item.name)}
          </Text>
        </ListItem.Title>

        <ListItem.Subtitle>
          <Text>Type: {item.types.map((t) => t.type.name).join(", ")}</Text>
        </ListItem.Subtitle>
      </ListItem.Content>

      <ListItem.Chevron />
    </ListItem>
  )
}
