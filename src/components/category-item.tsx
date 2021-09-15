import React, { FC } from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Col } from 'react-grid-system'

import { colors, fonts } from '../styles/variables'

interface Props {
  label: string
  imagePath: string
}

const Category = styled.div`
  align-items: 'stretch';
  background-color: ${colors.brand};
  border-bottom: 10px solid ${colors.white};
  display: flex;
`

const Text = styled.div`
  background-color: ${colors.whiteTransparent};
  flex: 1;
  font-family: ${fonts.titles};
  margin-top: 6em;
  padding: 1em;
`

const CategoryItem: FC<Props> = ({ label, imagePath }) => (
  <Col lg={3}>
    <Link to="">
      <Category
        style={{
          backgroundImage: `url(${imagePath})`,
          backgroundSize: 'cover'
        }}
      >
        <Text>{label}</Text>
      </Category>
    </Link>
  </Col>
)

export { CategoryItem }