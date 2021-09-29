interface CSSModule {
  [className: string]: string
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModule
}
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

// Main data types

type CategoryList = Category

interface Category {
  label: string
  imagePath: string
  slug: string
  subTitle: string
}

interface Subscription {
  company: string
  description: string
  details: SubscriptionDetails
  imageURLs: Array<string>
  name: string
  price: number
  url: string
}

interface SubscriptionDetails {
  controlDeliveryDate?: boolean
  deliveryFrequencyOptions: DeliveryFrequencies
  includesPot: boolean
  type: PlantType
  paymentPolicy: PaymentPolicy
  petFriendly?: boolean
}

type DeliveryFrequencies = Array<DeliveryFrequency>

type DeliveryFrequency = '1 month' | '2 month' | '3 month'

type PaymentPolicy = 'advantage' | 'monthly'

type PlantType = 'indoor' | 'outdoor'

type Subscriptions = Array<Subscription>

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        subTitle: string
        title: string
      }
    }
  }
}

interface CategoryTemplateProps {
  data: {
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}
