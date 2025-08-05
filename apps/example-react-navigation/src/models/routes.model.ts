import { StackScreenProps } from "@react-navigation/stack"
import { ROUTES } from "../navigations/Routes"
import { NavigatorScreenParams } from "@react-navigation/native"
import { DrawerScreenProps } from "@react-navigation/drawer"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { Pokemon } from "pokenode-ts"

export type HomeStackParamList = {
  [ROUTES.HOME]: undefined
}

export type HomeStackScreenProps<T extends keyof HomeStackParamList> = StackScreenProps<
  HomeStackParamList,
  T
>

export type TabParamList = {
  [ROUTES.SIGN_IN]: undefined
  [ROUTES.SIGN_UP]:
    | {
        email?: string
        password?: string
      }
    | undefined
}

export type TabNavigatorProps<T extends keyof TabParamList> = BottomTabScreenProps<TabParamList, T>

export type DrawerParamList = {
  [ROUTES.HOME]: undefined
  [ROUTES.FAVOURITES]: undefined
  [ROUTES.SETTINGS]: undefined
}

export type DrawerNavigatorProps<T extends keyof DrawerParamList> = DrawerScreenProps<
  DrawerParamList,
  T
>

export type FavouriteStackParamList = {
  [ROUTES.FAVOURITES]: undefined
}

export type FavouriteStackScreenProps<T extends keyof FavouriteStackParamList> = StackScreenProps<
  FavouriteStackParamList,
  T
>

export type RootStackParamList = {
  [ROUTES.DRAWER]: NavigatorScreenParams<DrawerParamList>
  [ROUTES.DETAILS]: {
    pokemon: Pokemon
  }
  [ROUTES.TAB]: NavigatorScreenParams<TabParamList>
}

export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootStackParamList {}
  }
}
