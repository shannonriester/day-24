import Backbone from 'backbone';
import moment from 'moment';

import user from './username';

const modelOrder = Backbone.Model.extend({
  urlRoot: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json',
  idAttribute: 'id',
  defaults: {
    username: user.username,
    amount: 0
    },
  // like: function like(){
  //   console.log('i like ' + this.get('title'));
  //   var newLikes = this.get('likes') + 1;
  //   this.set('likes', newLikes);
  //   this.save();
  // }
});

export default modelOrder;
