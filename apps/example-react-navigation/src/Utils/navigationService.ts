import { CommonActions, createNavigationContainerRef } from "@react-navigation/native"
import { ROUTES } from "../navigations/Routes"
import { RootStackParamList } from "../models/routes.model"

const navigationService = () => {
  const ref = createNavigationContainerRef()

  const getIsRefReady = ref.isReady

  const currentScreen: ROUTES | undefined = getIsRefReady()
    ? ref.getCurrentRoute()?.name
    : undefined

  const log = (...params: any[]) => console.log("Navigation service:", ...params)

  const onReadyCallback = (navigaionAction: CommonActions.Action) => {
    if (!getIsRefReady()) return log("ref is not ready")

    ref.dispatch(navigaionAction)
  }

  const goToDetails = (params: RootStackParamList[ROUTES.DETAILS]) => {
    log({ routeName: ROUTES.DETAILS, params })

    const action = CommonActions.navigate(ROUTES.DETAILS, params)

    onReadyCallback(action)
  }

  return {
    ref,
    currentScreen,
    goToDetails,
  }
}

export default navigationService()
