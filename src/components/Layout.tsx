import React from "react"
import styled from "styled-components"
import Header from "./Header"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}

export default Layout

const Container = styled.div``
