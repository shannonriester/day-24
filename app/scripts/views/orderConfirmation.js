import $ from 'jquery';

import renderOrder from './renderOrder';
// import renderMenu from './menu';

function renderConfirmation(){
  let $orderForm = $(`
    <div id="order-confirmation-pg">
      <form class="order-form">
        <input class="order-form-inputs" type="text" name="username" placeholder="username..." />
        <input class="order-form-inputs" type="text" name="first name" placeholder="first name" />
        <input class="order-form-inputs" type="text" name="last name" placeholder="last name" />
        <input class="order-form-inputs" type="text" name="address" placeholder="address" />
        <textarea name="special instructions" placeholder="additional comments..."rows="8" cols="50"></textarea>
        <div class="orderform-btns">
          <button id="clearBtn">clear</button>
          <button id="submit">submit</button>
        </div>
      </form>
    `);


    $orderForm.find('#orderBtn').empty().on('click', function(){
      orderSession.save();
      });
    $orderForm.find('#clearBtn').on('click', function(){
      $('order-form-input').val('');
      });

  return $orderForm;
}

export default renderConfirmation;
