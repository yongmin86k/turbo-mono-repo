// TODO: Split this to monorepo package
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"
import { ComponentProps } from "react"

type Props = ComponentProps<typeof FontAwesome5>

export default function Icon(props: Props) {
  return <FontAwesome5 {...props} />
}
