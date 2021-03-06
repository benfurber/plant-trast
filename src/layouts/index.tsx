import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { setConfiguration } from 'react-grid-system'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

setConfiguration({ maxScreenClass: 'xl' })

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
            link={[
              {
                href:
                  'https://fonts.googleapis.com/css2?family=Kreon&family=Roboto&display=swap',
                rel: 'stylesheet'
              }
            ]}
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
