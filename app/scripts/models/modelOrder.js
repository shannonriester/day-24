import Backbone from 'backbone';
import moment from 'moment';

import user from './username';

const ModelOrder = Backbone.Model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/day24_restaurant_orderHistory_sriester',
  idAttribute: '_id',
  defaults: {
    username: user.username,
    timestamp: moment().format('MM Do YYYY, h:mm:ss a'),
    items: [{
        name: '',
        price: 0,
        nItems: 0,
        id: 'id'
    }],
    tax: '',
    total: ''
  },
  adds: function adds (){
    let items = this.get('items') + 1;
    this.set('items', items);
    // this.save();
  }
});

let orderSession = new ModelOrder();

export default orderSession;
