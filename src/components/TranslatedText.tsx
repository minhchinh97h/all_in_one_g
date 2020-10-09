import { translate } from '@i18n/helper'
import React from 'react'
import styled from 'styled-components'

interface Props {
  text: string
}

const TranslatedText = (props: Props) => {
  const { text } = props

  return <PText>{translate(text)}</PText>
}

export default TranslatedText

const PText = styled.p``
