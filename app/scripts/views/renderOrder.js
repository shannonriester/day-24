import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import router from '../router';

import orderSession from '../models/modelOrder';
import renderMenu from './menu';
import user from '../models/username';

function renderOrder(addedOrder){
    let menuItems = orderSession.get('items');
    let $orderedList = $(`
      <div class="side-order confirm-order">
          <h4>Your Order: </h4>
          <ul>

          </ul>
          <div class="order-totals">
            <p class="order-price tax-price">${orderSession.get('tax').toFixed(2)}</p>
            <p class="order-price total-price">${orderSession.get('total').toFixed(2)}</p>
          </div>
          <input id="orderBtn" type="button" name="place order" value="place order..." />
       </div>
      `);

      menuItems.forEach(function(item){
        let $addedItem = $(`
            <li>
              <h5>${item.item}</h5>
              <data>$${Number(item.price).toFixed(2)}</data>
            </li>
          `);
          $orderedList.find('ul').append($addedItem);
      });

      $orderedList.find('#orderBtn').on('click', function(){
        router.navigate('order', {trigger: true});
        // orderSession.save();
      });

  return $orderedList;
}

export default renderOrder;
