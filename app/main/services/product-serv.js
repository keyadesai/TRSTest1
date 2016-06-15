'use strict';
angular.module('main')
.service('Product', function ($log) {

  this.products = [{
    id: 1,
    name: 'Mars Pods 176g',
    image: 'main/assets/images/pods.jpg',
    price: '$2.00',
    rating: 3,
    quote: 'Delicious treats!! Hard to stop at just a few.',
    reviewer: 'Timothy • 12 June 2016'
  },
  {
    id: 2,
    name: 'Cadbury Dairy Milk Biscuits 110g',
    image: 'main/assets/images/cadbury.jpg',
    price: '$2.00',
    rating: 4,
    quote: 'These taste just like I get from supermarkets',
    reviewer: 'Keya • 9 June 2016'
  },
  {
    id: 3,
    name: 'Pringles Xtra 140g',
    image: 'main/assets/images/pringles.jpg',
    price: '$2.00',
    rating: 5,
    quote: 'Once you pop you will never stop at these prices!',
    reviewer: 'Dan • 3 June 2016'
  },
  {
    id: 4,
    name: 'Schmackos Chomp N Chew 180g 3pk',
    image: 'main/assets/images/schamacs.jpg',
    price: '$5.00',
    rating: 3,
    quote: 'I save heaps compared to supermarkets. My dog loves them',
    reviewer: 'Amanda • 11 June 2016'
  },
  {
    id: 5,
    name: 'My Dog 100g 6pk ',
    image: 'main/assets/images/my-dog.jpg',
    price: '$5.00',
    rating: 5,
    quote: 'Value for money!',
    reviewer: 'Katherine • 3 June 2016'
  },
  {
    id: 6,
    name: 'Dine 85g 7pk',
    image: 'main/assets/images/dine.jpg',
    price: '$5.00',
    rating: 3,
    quote: 'I save heaps compared to supermarkets. My dog loves them',
    reviewer: 'Kathy • 11 June 2016'
  }
];


this.laundryProducts = [{
    id: 1,
    name: 'Mars Pods 176g',
    image: 'main/assets/images/laundry-1.jpg',
    price: '$2.00',
    rating: 3,
    quote: 'Delicious treats!! Hard to stop at just a few.',
    reviewer: 'Timothy • 12 June 2016'
  },
  {
    id: 2,
    name: 'Cadbury Dairy Milk Biscuits 110g',
    image: 'main/assets/images/laundry-2.jpg',
    price: '$2.00',
    rating: 4,
    quote: 'These taste just like I get from supermarkets',
    reviewer: 'Keya • 9 June 2016'
  },
  {
    id: 3,
    name: 'Pringles Xtra 140g',
    image: 'main/assets/images/laundry-3.jpg',
    price: '$2.00',
    rating: 5,
    quote: 'Once you pop you will never stop at these prices!',
    reviewer: 'Dan • 3 June 2016'
  },
  {
    id: 4,
    name: 'Schmackos Chomp N Chew 180g 3pk',
    image: 'main/assets/images/laundry-4.jpg',
    price: '$5.00',
    rating: 3,
    quote: 'I save heaps compared to supermarkets. My dog loves them',
    reviewer: 'Amanda • 11 June 2016'
  },
  {
    id: 3,
    name: 'Monaco Lint Brush',
    image: 'main/assets/images/laundry-5.jpg',
    price: '$2.00',
    rating: 5,
    quote: 'Once you pop you will never stop at these prices!',
    reviewer: 'Dan • 3 June 2016'
  },
  {
    id: 3,
    name: 'Radiant Color Guard',
    image: 'main/assets/images/laundry-6.jpg',
    price: '$2.00',
    rating: 5,
    quote: 'Once you pop you will never stop at these prices!',
    reviewer: 'Dan • 3 June 2016'
  },
  {
    id: 3,
    name: 'Pringles Xtra 140g',
    image: 'main/assets/images/laundry-7.jpg',
    price: '$2.00',
    rating: 5,
    quote: 'Once you pop you will never stop at these prices!',
    reviewer: 'Dan • 3 June 2016'
  }
];

this.bathroomProducts = [{
    id: 1,
    name: 'Schwarzkopf Extra Care Shampoo Marrakesh Oil 400ml',
    image: 'main/assets/images/bathroom-1.jpg',
    price: '$2.00',
    rating: 3,
    quote: 'Delicious treats!! Hard to stop at just a few.',
    reviewer: 'Timothy • 12 June 2016'
  },
  {
    id: 2,
    name: 'Schwarzkopf Extra Care Conditioner Ultimate Repair 400ml',
    image: 'main/assets/images/bathroom-2.jpg',
    price: '$2.00',
    rating: 4,
    quote: 'These taste just like I get from supermarkets',
    reviewer: 'Keya • 9 June 2016'
  },
  {
    id: 3,
    name: 'Redox Restore Shower Gel 1L',
    image: 'main/assets/images/bathroom-3.jpg',
    price: '$2.00',
    rating: 5,
    quote: 'Once you pop you will never stop at these prices!',
    reviewer: 'Dan • 3 June 2016'
  },
  {
    id: 4,
    name: 'Schmackos Chomp N Chew 180g 3pk',
    image: 'main/assets/images/bathroom-4.jpg',
    price: '$5.00',
    rating: 3,
    quote: 'I save heaps compared to supermarkets. My dog loves them',
    reviewer: 'Amanda • 11 June 2016'
  },
  {
    id: 2,
    name: 'Cadbury Dairy Milk Biscuits 110g',
    image: 'main/assets/images/bathroom-5.jpg',
    price: '$2.00',
    rating: 4,
    quote: 'These taste just like I get from supermarkets',
    reviewer: 'Keya • 9 June 2016'
  },
  {
    id: 3,
    name: 'Pringles Xtra 140g',
    image: 'main/assets/images/bathroom-6.jpg',
    price: '$2.00',
    rating: 5,
    quote: 'Once you pop you will never stop at these prices!',
    reviewer: 'Dan • 3 June 2016'
  },
  {
    id: 4,
    name: 'Schmackos Chomp N Chew 180g 3pk',
    image: 'main/assets/images/bathroom-7.jpg',
    price: '$5.00',
    rating: 3,
    quote: 'I save heaps compared to supermarkets. My dog loves them',
    reviewer: 'Amanda • 11 June 2016'
  },
  {
    id: 2,
    name: 'Colgate Cavity Protection 175g',
    image: 'main/assets/images/bathroom-8.jpg',
    price: '$2.00',
    rating: 4,
    quote: 'These taste just like I get from supermarkets',
    reviewer: 'Keya • 9 June 2016'
  },
  {
    id: 3,
    name: 'Dove Beauty Cream Bar',
    image: 'main/assets/images/bathroom-9.jpg',
    price: '$2.00',
    rating: 5,
    quote: 'Once you pop you will never stop at these prices!',
    reviewer: 'Dan • 3 June 2016'
  },
  {
    id: 4,
    name: 'Rexona Women Free Spirit',
    image: 'main/assets/images/bathroom-10.jpg',
    price: '$5.00',
    rating: 3,
    quote: 'I save heaps compared to supermarkets. My dog loves them',
    reviewer: 'Amanda • 11 June 2016'
  },

];




this.inspirations = [{
  id: 1,
  name: 'Lovely Laundry List',
  products: this.laundryProducts
},
{
  id: 1,
  name: 'Bathroom Bliss',
  products: this.bathroomProducts
}
];






  $log.log('Hello from your Service: Product in module main');

});
