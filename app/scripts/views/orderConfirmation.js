import $ from 'jquery';

// import renderMenu from './menu';

function renderOrder(){
  let $orderForm = $(`
    <div id="order-confirmation-pg">
      <form class="order-form">
        <input class="order-form-inputs" type="text" name="username" placeholder="username..." />
        <input class="order-form-inputs" type="text" name="first name" placeholder="first name" />
        <input class="order-form-inputs" type="text" name="last name" placeholder="last name" />
        <input class="order-form-inputs" type="text" name="address" placeholder="address" />
        <textarea name="special instructions" rows="8" cols="40"></textarea>
      </form>

      <div class="side-order confirm-order">
        <h4>Your Order</h4>
           <ul>
             <li>Item1:</li>
             <li>Item2:</li>
             <li class="order-footer">
               <p class="order-price tax-price"></p>
               <p class="order-price total-price"></p>
               <input type="button" name="place order" value="place order" />
               <input type="button" name="start over" value="start over" />
             </li>
           </ul>
      </div>
    </div>
    `);



  return $orderForm;
}

export default renderOrder;
