import { Pokemon } from "pokenode-ts"
import { useMemo } from "react"
import { ActivityIndicator, FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native"
import PokemonListItem from "./PokemonListItem"
import { Spacer } from "@local/react-native-shared-ui"
import { defaultTheme } from "@rn-vui/base"
import { createElementKey } from "../../utils/helpers"

interface Props {
  testID: string
  pokemons: Map<number, Pokemon>
  isLoading: boolean
  onPress?: (id: number) => void
}

export default function PokemonList(props: Props) {
  const pokemonsArray = useMemo(() => Array.from(props.pokemons.values()), [props.pokemons])

  const keyExtractor = (item: Pokemon) => createElementKey(item)
  const renderItem: ListRenderItem<Pokemon> = ({ item }) => (
    <PokemonListItem key={item.id} item={item} onPress={props.onPress} />
  )

  return (
    <FlatList
      testID={props.testID}
      contentContainerStyle={
        props.isLoading || props.pokemons.size === 0 ? styles.loadingView : undefined
      }
      contentInset={{
        top: 0,
        bottom: props.pokemons.size > 0 ? 200 : 48,
      }}
      data={pokemonsArray}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={() => (
        <View style={{ paddingHorizontal: 24 }}>
          <Spacer height={2} />
          <View style={{ height: 1, backgroundColor: defaultTheme.colors.grey4 }} />
          <Spacer height={2} />
        </View>
      )}
      ListEmptyComponent={
        <View>
          {props.isLoading ? (
            <>
              <ActivityIndicator />

              <Spacer height={8} />
              <Text>Loading...</Text>
            </>
          ) : (
            <Text>No data</Text>
          )}

          <Spacer height={120} />
        </View>
      }
    />
  )
}

const styles = StyleSheet.create({
  loadingView: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
})
