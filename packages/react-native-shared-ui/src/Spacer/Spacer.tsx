import React from "react"
import { DimensionValue, View } from "react-native"

interface Props {
  height?: DimensionValue
  width?: DimensionValue
}

export default function Spacer({ width = "100%", height = 16 }: Props) {
  return <View style={{ width, height }} />
}
