import * as React from 'react'

import { Container, Hero, Page } from '../components'
import IndexLayout from '../layouts'

interface Props {
  pageContext: Category
}

const CategoryPage: React.FC<Props> = props => {
  const { label, imagePath, subTitle } = props.pageContext

  return (
    <IndexLayout>
      <Page>
        <Container>
          <Hero imageUrl={imagePath} title={label} subTitle={subTitle} />
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default CategoryPage
