import { FONTS } from "~styles/"
import React from "react"
import styled from "styled-components"

const Logo = () => {
  return (
    <Container>
      <SomeWeirdText>Logo</SomeWeirdText>
    </Container>
  )
}

export default Logo

const Container = styled.div``

const SomeWeirdText = styled.p`
  font-family: ${FONTS.REGULAR};
`
