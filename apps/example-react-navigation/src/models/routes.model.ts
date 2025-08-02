import { StackScreenProps } from "@react-navigation/stack"
import { ROUTES } from "../navigations/Routes"
import { NavigatorScreenParams } from "@react-navigation/native"
import { DrawerScreenProps } from "@react-navigation/drawer"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"

export type HomeStackParamList = {
  [ROUTES.HOME]: undefined
  [ROUTES.DETAILS]: undefined
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
  [ROUTES.HOME_STACK]: undefined
  [ROUTES.SETTINGS]: undefined
}

export type DrawerNavigatorProps<T extends keyof DrawerParamList> = DrawerScreenProps<
  DrawerParamList,
  T
>

export type RootStackParamList = {
  [ROUTES.DRAWER]: NavigatorScreenParams<DrawerParamList>
  [ROUTES.TAB]: NavigatorScreenParams<TabParamList>
}

export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootStackParamList {}
  }
}
