import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import { Container, Hero } from '../components'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Hero
          imageUrl="./images/hero/home.jpg"
          title="Easily find the perfect plant subscription for you"
        />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
