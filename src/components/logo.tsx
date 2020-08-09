import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { siteWide } from '../labels'
import { dimensions, spacing } from '../styles/variables'

const HomepageLink = styled(Link)`
  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const Title = styled.h1`
  font-size: ${dimensions.headingSizes.h0}rem;
  font-weight: 300;
  line-height: 0.8;
  margin: 0;
  padding-top: ${spacing.small}em;
`

const TitleBold = styled.span`
  font-size: ${dimensions.headingSizes.h0 + 0.5}rem;
  font-weight: 600;
`

const Description = styled.h2`
  font-size: ${dimensions.headingSizes.h4}rem;
  font-weight: 700;
  margin: 0;
`

const Logo: React.FC = () => (
  <HomepageLink to="/">
    <Title>
      <TitleBold>Plant</TitleBold>-trast
    </Title>
    <Description>{siteWide.description}</Description>
  </HomepageLink>
)

export { Logo }
