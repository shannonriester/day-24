import Backbone from 'backbone';
import moment from 'moment';

import user from './username';

const ModelOrder = Backbone.Model.extend({
  urlRoot: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json',
  idAttribute: 'id',
  defaults: {
    username: user.username,
    timestamp: moment().format('MM Do YYYY, h:mm:ss a'),
    items: 1
  },
  adds: function adds (){
    let items = this.get('adds') + 1;
    this.set('adds', items);
    this.save();
  }
});

export default modelOrder;
