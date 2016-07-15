import Backbone from 'backbone';
import moment from 'moment';

import user from './username';

const modelOrder = Backbone.Model.extend({
  urlRoot: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json',
  idAttribute: 'id',
  defaults: {
    username: user.username,
    timestamp: moment().format('MM Do YYYY, h:mm:ss a'),
    adds: 0
  },
  adds: function adds (){
    let newAdd = this.get('adds') + 1;
    this.set('adds', newAdd);
    this.save();
  }
});

export default modelOrder;
