import { FONTS } from "~styles/"
import React from "react"
import styled from "styled-components"
import { translate } from "~helpers/i18next-helper"

const Logo = () => {
  return (
    <Container>
      <SomeWeirdText>{translate("HELLO")}</SomeWeirdText>
    </Container>
  )
}

export default Logo

const Container = styled.div``

const SomeWeirdText = styled.p`
  font-family: ${FONTS.REGULAR};
`
