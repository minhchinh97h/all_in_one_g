import { theme } from "~styles/"
import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { ThemeProps } from "~types/styles-types"
import Header from "./header/Header"
import { useSelector } from "react-redux"
import { getTheme } from "~selectors/theme-selections"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const currentTheme = useSelector(getTheme)
  
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Container>
        <Header />
        {children}
      </Container>
    </ThemeProvider>
  )
}

export default Layout

const Container = styled.div<ThemeProps>`
  background-color: ${(props: ThemeProps) => props.theme.PRIMARY_COLOR};
  width: 100vw;
  height: 100vh;
`
