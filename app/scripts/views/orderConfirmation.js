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
        <textarea name="special instructions" rows="8" cols="40"></textarea>
      </form>
    `);


    $orderForm.find('#orderBtn').empty().on('click', function(){
      orderSession.save();
      });

  return $orderForm;
}

export default renderConfirmation;
