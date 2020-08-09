import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'

import { Container, Logo } from '.'
import { dimensions, colors } from '../styles/variables'

const StyledHeader = styled.header`
  padding: 0 ${dimensions.containerPadding}rem;
  color: ${transparentize(0.5, colors.white)};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const Header: React.FC = () => (
  <StyledHeader>
    <HeaderInner>
      <Logo />
    </HeaderInner>
  </StyledHeader>
)

export default Header
