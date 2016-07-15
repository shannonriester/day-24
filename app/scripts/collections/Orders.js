import Backbone from 'backbone';

import modelOrder from '../models/modelOrder';

const Orders = Backbone.Collection.extend({
  url: 'https://tiny-za-server.herokuapp.com/collections/day24_restaurant_orderHistory_sriester',
  model: modelOrder
});

let orderCollection = new Orders();

export default orderCollection;
