import React, { FC } from 'react'
import { Row } from 'react-grid-system'
import styled from '@emotion/styled'

import { categoryList } from './../data'
import { CategoryItem, Container } from '.'
import { dimensions } from '../styles/variables'

const Wrapper = styled.div`
  padding: ${dimensions.containerPadding}em 0;
`

const CategoryList: FC = () => (
  <Wrapper>
    <Container>
      <Row justify="around">
        <CategoryItem {...categoryList} />
      </Row>
    </Container>
  </Wrapper>
)

export { CategoryList }
