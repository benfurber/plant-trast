import React from 'react'
import styled from '@emotion/styled'

import { Col, Row } from 'react-grid-system'
import { Container } from '.'
import { colors } from '../styles/variables'

const height = '280px'

const Column = styled(Col)`
  background: ${colors.brandTransparent};
`

const Title = styled(Col)`
  text-align: center;
  color: ${colors.white};
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
            <Title>{title}</Title>
          </Row>
        </Column>
      </Row>
    </Container>
  )
}

export { Hero }
