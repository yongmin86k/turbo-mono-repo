import { useEffect } from "react"
import { ROUTES } from "../navigations/Routes"
import { upperFirst } from "lodash"

export default function useLifeCycleLog(route: ROUTES) {
  const screen = upperFirst(route)

  useEffect(() => {
    console.log(`${screen} mounted`)

    return () => {
      console.log(`${screen} unmounted`)
    }
  }, [])
}
