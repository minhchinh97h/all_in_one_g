import React from "react"
import styled from "styled-components"
import { ThemeProps } from "~types/styles-types"
import Logo from "./Logo"

const Header = () => {
  return (
    <Container>
      <Logo />
    </Container>
  )
}

export default Header

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: ${(props: ThemeProps) => props.theme.SECONDARY_COLOR};
  top: 0;
`
