import $ from 'jquery';
import Backbone from 'backbone';

import orderCollection from '../models/modelOrder';
import renderMenu from './menu';

function createOrder(){
  let orderBox = $(`
    <div class="side-order">
        <h4>Your Order</h4>
        <ul>
          <li>Item1: </li>
          <li>Item2:</li>
          <li class="order-footer">
            <p class="order-price tax-price"></p>
            <p class="order-price total-price"></p>
            <input type="button" name="place order" />
          </li>
        </ul>
     </div>
    `);

    let order = new ModelOrder({
      customer: user.username,
      itemName: itemName,
      amount: amount
    });

    order.save(null, {
      success: function(response) {
        console.log('you added an item!');
      },
      error: function(){
        console.log('error occured!');
      }
    });

  return orderBox;
}


export default createOrder;
