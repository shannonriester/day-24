import Backbone from 'backbone';

import modelOrder from '../models/modelOrder';

const Orders = Backbone.Collection.extend({
  url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json',
  model: modelOrder
});

let orderCollection = new Orders();

export default orderCollection;
