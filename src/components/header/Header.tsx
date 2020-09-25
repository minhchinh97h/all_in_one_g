import React from "react"
import styled from "styled-components"
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
  background-color: yellow;
  top: 0;
`
