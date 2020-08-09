import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => {
      const { description, keywords, title } = data.site.siteMetadata
      const extendedTitle = `${title} - ${description}`

      return (
        <LayoutRoot>
          <Helmet
            title={extendedTitle}
            meta={[
              { name: 'description', content: description },
              { name: 'keywords', content: keywords }
            ]}
          />
          <Header />
          <LayoutMain>{children}</LayoutMain>
        </LayoutRoot>
      )
    }}
  />
)

export default IndexLayout
