import { FONTS } from '~styles/'
import React from 'react'
import styled from 'styled-components'
import { translate } from '~helpers/i18next-helper'

const Logo = () => {
  return (
    <Container>
      <LogoHolder>{translate('LOGO_HOLDER')}</LogoHolder>
    </Container>
  )
}

export default Logo

const Container = styled.div``

const LogoHolder = styled.p`
  font-family: ${FONTS.REGULAR};
`
