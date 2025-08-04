import { Pokemon } from "pokenode-ts"
import { useMemo } from "react"
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native"
import PokemonListItem from "./PokemonListItem"
import { Spacer } from "@local/react-native-shared-ui"

interface Props {
  pokemons: Map<number, Pokemon>
  isLoading: boolean
}

export default function PokemonList(props: Props) {
  const pokemonsArray = useMemo(() => Array.from(props.pokemons.values()), [props.pokemons])

  return (
    <FlatList
      contentContainerStyle={
        props.isLoading || props.pokemons.size === 0 ? styles.loadingView : undefined
      }
      contentInset={{
        top: 0,
        bottom: props.pokemons.size > 0 ? 200 : 48,
      }}
      data={pokemonsArray}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={({ item, index }) => <PokemonListItem key={`${item.id}-${index}`} item={item} />}
      ListEmptyComponent={
        props.isLoading ? (
          <View>
            <ActivityIndicator />

            <Spacer height={8} />
            <Text>Loading...</Text>

            <Spacer height={120} />
          </View>
        ) : (
          <View>
            <Text>No data</Text>

            <Spacer height={120} />
          </View>
        )
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
