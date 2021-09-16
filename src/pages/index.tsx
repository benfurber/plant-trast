import * as React from 'react'

import { CategoryList, Container, Hero, Page } from '../components'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Hero
          imageUrl="./images/hero/home.jpg"
          title="Easily find the perfect plant subscription for you"
        />
        <CategoryList />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
