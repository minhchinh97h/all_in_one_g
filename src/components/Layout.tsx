import { theme } from "@styles/"
import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { ThemeProps } from "types/styles"
import Header from "./header/Header"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        {children}
      </Container>
    </ThemeProvider>
  )
}

export default Layout

const Container = styled.div`
  background-color: ${(props: ThemeProps) => props.theme.DARK.PRIMARY_COLOR};
  width: 100vw;
  height: 100vh;
`
