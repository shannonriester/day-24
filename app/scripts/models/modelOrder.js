import Backbone from 'backbone';
import moment from 'moment';

import user from './username';

const ModelOrder = Backbone.Model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/day24_restaurant_orderHistory_sriester',
  idAttribute: '_id',
  defaults: {
    username: user.username,
    timestamp: moment().format('MM Do YYYY, h:mm:ss a'),
    items: [],
    tax: '',
    total: ''
  }
  // adds: function adds (addedItem){
  //   let itemsArr = this.get('items');
  //   let newItemsArr = itemsArr.concat(addedItem);
  //   this.set('items', newItemsArr);
    // console.log(newItemsArr, ' === modelOrder Items');
});

ModelOrder.prototype.addItem = function(addedItem){
  let itemsArr = this.get('items');
  let newItemsArr = itemsArr.concat(addedItem);
  // console.log(newItemsArr);
  this.set('items', newItemsArr);
  // this.update('items', newItemsArr);
};

let orderSession = new ModelOrder();

export default orderSession;
