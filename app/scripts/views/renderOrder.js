import $ from 'jquery';
import Backbone from 'backbone';

// import router from '../router';
import orderSession from '../models/modelOrder';
import renderMenu from './menu';
import user from '../models/username';

function renderOrder(addedOrder){
  let menuItems = orderSession.get('items');
  console.log(addedOrder);

  let $orderedList = $(`
    <div class="side-order">
        <h4>Your Order: </h4>
        <ul>
          <li class="order-li-footer">
            <p class="order-price tax-price"></p>
            <p class="order-price total-price"></p>
            <input type="button" name="place order" />
          </li>
        </ul>
     </div>
    `);

    menuItems.forEach(function(item){
      let $addedItem = $(`
          <li>
          <h5>${item.item}</h5>
          <data>${item.price}</data>
          <data>Quantity: </data>
          </li>
        `);
        $orderedList.append($addedItem);
    });

//add event listener on "final submit order" button and then go from there

// let newOrder = new ModelOrder({
//   customer: user.username,
//   id: item.id,
//   itemName: item.item,
//   price: item.price
// });

    // let order = new ModelOrder({
    //   customer: user.username,
    //   itemName: 'itemName',
    //   amount: 'amount'
    // });

    // orderLIst.on('change', function(){
    //
    // });
    //
    // order.save(null, {
    //   success: function(response) {
    //     console.log('you added an item!');
    //   },
    //   error: function(){
    //     console.log('error occured!');
    //   }
    // });

  return $orderedList;
}


export default renderOrder;
