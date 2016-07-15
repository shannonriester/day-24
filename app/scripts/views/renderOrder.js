import $ from 'jquery';
import Backbone from 'backbone';

import orderSession from '../models/modelOrder';
import renderMenu from './menu';
import user from '../models/username';

function renderOrder(orderSession){
console.log(orderSession);

  let orderBox = $(`
    <div class="side-order">
        <h4>Your Order: ${user.username}</h4>
        <ul>
          <li class="order-footer">
            <p class="order-price tax-price">${orderSession.tax}</p>
            <p class="order-price total-price">${orderSession.total}</p>
            <input type="button" name="place order" />
          </li>
        </ul>
     </div>
    `);
    orderSession.forEach(function(orderItem){
      let $addedItem = $(`
          <li>
          <h5>${orderItem.item}</h5>
          <data>${orderItem.price}</data>
          <data></data>
          </li>
        `);
    });


    // let order = new ModelOrder({
    //   customer: user.username,
    //   itemName: 'itemName',
    //   amount: 'amount'
    // });

    orderLIst.on('change', function(){

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


export default renderOrder;
