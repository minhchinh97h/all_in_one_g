import { translate } from "@i18n/helper"
import React from "react"

interface Props {
  text: string
}

const TranslatedText = (props: Props) => {
  const { text } = props

  return <p>{translate(text)}</p>
}

export default TranslatedText
