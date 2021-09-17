import * as React from 'react'
import { graphql } from 'gatsby'

import { Container, Hero, Page } from '../components'
import IndexLayout from '../layouts'

const CategoryTemplate: React.FC<CategoryTemplateProps> = ({ data }) => (
  <IndexLayout>
    <Page>
      <Container>
        <Hero
          imageUrl="./images/hero/home.jpg"
          title={data.markdownRemark.frontmatter.title}
          subTitle={data.markdownRemark.frontmatter.subTitle}
        />
      </Container>
    </Page>
  </IndexLayout>
)

export default CategoryTemplate

export const query = graphql`
  query CategoryTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        subTitle
        title
      }
    }
  }
`
