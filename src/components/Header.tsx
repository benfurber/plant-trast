import * as React from 'react'
import styled from '@emotion/styled'

import { Container, Logo } from '.'
import { dimensions } from '../styles/variables'

const StyledHeader = styled.header`
  padding: 0 ${dimensions.containerPadding}rem;
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Header: React.FC = () => (
  <StyledHeader>
    <HeaderInner>
      <Logo />
    </HeaderInner>
  </StyledHeader>
)

export default Header
