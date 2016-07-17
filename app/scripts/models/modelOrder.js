import _ from 'underscore';
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
    tax: 0,
    total: 0
  }
});

ModelOrder.prototype.addItem = function(addedItem){
  let itemsArr = this.get('items');
  console.log(itemsArr);
  let newItemsArr = itemsArr.concat(addedItem);
  this.set('items', newItemsArr);
};
ModelOrder.prototype.addTax = function(){
  let newTax = 0;
  let itemsArr = this.get('items');
  itemsArr.forEach((item) => {
    newTax += (item.price * 0.0825);
    this.set('tax', newTax);
  });
};
ModelOrder.prototype.addTotal = function(){
  let newTotal = 0;
  let itemsArr = this.get('items');
  itemsArr.forEach((item) => {
    newTotal += item.price;
    this.set('total', newTotal + this.get('tax'));
  });
};

let orderSession = new ModelOrder();

export default orderSession;
