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
    name: 'Laundry Storage Boxes',
    image: 'main/assets/images/laundry-1.jpg',
    price: '$5.00',
    rating: 3,
    quote: 'Delicious treats!! Hard to stop at just a few.',
    reviewer: 'Timothy • 12 June 2016'
  },
  {
    id: 2,
    name: 'Bathroom Storage Boxes',
    image: 'main/assets/images/laundry-2.jpg',
    price: '$5.00',
    rating: 4,
    quote: 'These taste just like I get from supermarkets',
    reviewer: 'Keya • 9 June 2016'
  },
  {
    id: 3,
    name: 'Soft Grip Pegs',
    image: 'main/assets/images/laundry-3.jpg',
    price: '$2.00',
    rating: 5,
    quote: 'Once you pop you will never stop at these prices!',
    reviewer: 'Dan • 3 June 2016'
  },
  {
    id: 4,
    name: 'Felt Bag',
    image: 'main/assets/images/laundry-4.jpg',
    price: '$10.00',
    rating: 3,
    quote: 'I save heaps compared to supermarkets. My dog loves them',
    reviewer: 'Amanda • 11 June 2016'
  },
  {
    id: 5,
    name: 'Monaco Lint Brush',
    image: 'main/assets/images/laundry-5.jpg',
    price: '$2.00',
    rating: 5,
    quote: 'Once you pop you will never stop at these prices!',
    reviewer: 'Dan • 3 June 2016'
  },
  {
    id: 6,
    name: 'Radiant Color Guard',
    image: 'main/assets/images/laundry-6.jpg',
    price: '$2.00',
    rating: 5,
    quote: 'Once you pop you will never stop at these prices!',
    reviewer: 'Dan • 3 June 2016'
  },
  {
    id: 7,
    name: 'Lint roller',
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
    name: 'Bathroom soap despenser',
    image: 'main/assets/images/bathroom-4.jpg',
    price: '$5.00',
    rating: 3,
    quote: 'I save heaps compared to supermarkets. My dog loves them',
    reviewer: 'Amanda • 11 June 2016'
  },
  {
    id: 5,
    name: 'Toilet Brush',
    image: 'main/assets/images/bathroom-5.jpg',
    price: '$2.00',
    rating: 4,
    quote: 'These taste just like I get from supermarkets',
    reviewer: 'Keya • 9 June 2016'
  },
  {
    id: 6,
    name: 'Felt Bucket',
    image: 'main/assets/images/bathroom-6.jpg',
    price: '$2.00',
    rating: 5,
    quote: 'Once you pop you will never stop at these prices!',
    reviewer: 'Dan • 3 June 2016'
  },
  {
    id: 7,
    name: 'Felt Bucket',
    image: 'main/assets/images/bathroom-7.jpg',
    price: '$5.00',
    rating: 3,
    quote: 'I save heaps compared to supermarkets. My dog loves them',
    reviewer: 'Amanda • 11 June 2016'
  },
  {
    id: 8,
    name: 'Colgate Cavity Protection 175g',
    image: 'main/assets/images/bathroom-8.jpg',
    price: '$2.00',
    rating: 4,
    quote: 'These taste just like I get from supermarkets',
    reviewer: 'Keya • 9 June 2016'
  },
  {
    id: 9,
    name: 'Dove Beauty Cream Bar',
    image: 'main/assets/images/bathroom-9.jpg',
    price: '$2.00',
    rating: 5,
    quote: 'Once you pop you will never stop at these prices!',
    reviewer: 'Dan • 3 June 2016'
  },
  {
    id: 10,
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
  products: this.laundryProducts,
  bloggerName: 'Natalie from PartyMoms',
  date: 'June 05, 2016',
  title: 'Bathroom Bliss',
  image: 'main/assets/images/bathroom-bliss.jpg',
  avatar: 'main/assets/images/43.jpg',
  description: 'I love the Reject Shops new bathroom range - its been a lot of fun putting this inspiration moodboard together - hope you like it!'
},
{
  id: 1,
  name: 'Bathroom Bliss',
  products: this.bathroomProducts,
  bloggerName: 'Emily from PartyMoms',
  date: 'June 05, 2016',
  title: 'Get a Lovely Laundry',
  image: 'main/assets/images/laundry.jpg',
  avatar: 'main/assets/images/emily.png',
  description: 'I love the Reject Shops new laundry range - its been a lot of fun putting this inspiration moodboard together - hope you like it!'
}
];
});
