export const subscriptions: Subscriptions = [
  {
    company: 'Lazy Flora',
    description:
      'Our Luxury collections are designed for budding plant enthusiasts, ' +
      'who are looking for plants that are a little more striking and ' +
      'unusual. The plants in this collection are generally a bit of a' +
      'challenge for us to source, and might not be so familiar to you - ' +
      'or you might have heard of them, but perhaps not have been able to ' +
      "find one elsewhere. You don't have to be a plant expert to enjoy" +
      'this collection!',
    name: 'Luxury Plants for your Indoor Space',
    imageURLs: ['./'],
    url: 'https://lazyflora.com/products/indoor-plant-subscription-pay-monthly',
    price: 33.0,
    details: {
      controlDeliveryDate: true,
      deliveryFrequencyOptions: ['1 month', '2 month'],
      includesPot: true,
      type: 'indoor',
      paymentPolicy: 'monthly',
      petFriendly: true
    }
  }
]
