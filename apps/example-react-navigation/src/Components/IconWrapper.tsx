import FontAwesome5 from "@expo/vector-icons/FontAwesome5"
import {} from "@expo/vector-icons"
import { defaultTheme } from "@rneui/base"

interface Props {
  name?: string
  color?: string
  size?: number
}

export default function IconWrapper({
  name = "user-alt",
  color = defaultTheme.colors.primary,
  size = 24,
}: Props) {
  return <FontAwesome5 name={name} color={color} size={size} />
}
