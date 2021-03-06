import React from 'react'
import styled from '@emotion/styled'

import { Col, Row } from 'react-grid-system'
import { Container } from '.'
import { colors, dimensions, fonts } from '../styles/variables'

const height = '280px'

const Column = styled(Col)`
  background: ${colors.brandTransparent};
`

const Title = styled.span`
  color: ${colors.white};
  font-family: ${fonts.titles};
  font-size: ${dimensions.headingSizes.h1}rem;
  p {
    white-space: pre-line;
  }
`

const TitleWrapper = styled(Col)`
  text-align: center;
`

interface Props {
  imageUrl: string
  title: string
}

const Hero = (props: Props) => {
  const { imageUrl, title } = props

  return (
    <Container fluid>
      <Row align="center" style={{ background: `url(${imageUrl})` }}>
        <Column style={{ background: colors.brandTransparent }}>
          <Row align="center" style={{ height }}>
            <TitleWrapper>
              <Title>
                <p>{title}</p>
              </Title>
            </TitleWrapper>
          </Row>
        </Column>
      </Row>
    </Container>
  )
}

export { Hero }
