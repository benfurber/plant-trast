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
  const content: any
  export default content
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
