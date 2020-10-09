import React from 'react'
import styled from 'styled-components'
import { GLOBAL_PADDING_HORIZONTAL } from '~styles/'
import { ThemeProps } from '~types/styles-types'
import Logo from './Logo'

const Header: () => React.ReactNode = () => {
  const navData: NavButtonType[] = [
    {
      title: 'Button 1',
      link: 'https://www.google.com/'
    },
    {
      title: 'Button 2',
      link: 'https://www.google.com/'
    },
    {
      title: 'Button 3',
      link: 'https://www.google.com/'
    }
  ]

  const navButtonComponents = navData.map((data, index) => (
    <NavButton key={`nav-button-component-${data.title}-index-${index}`}>
      {data.title}
    </NavButton>
  ))

  return (
    <Container>
      <RowContainer>
        <Logo />
        <NavTabContainer>{navButtonComponents}</NavTabContainer>
      </RowContainer>
    </Container>
  )
}

export default Header

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: ${(props: ThemeProps) => props.theme.BUTTON_PRIMARY_COLOR};
  top: 0;
`
const RowContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px ${GLOBAL_PADDING_HORIZONTAL}px;
`

const NavTabContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const NavButton = styled.button`
  margin: 0px 15px;
`

interface NavButtonType {
  title: string
  link: string
}
