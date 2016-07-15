import Backbone from 'backbone';

import singleOrder from '../models/singleOrder';

const Orders = Backbone.Collection.extend({
  url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json',
  model: singleOrder
});

let orderCollection = new Orders();

export default orderCollection;
