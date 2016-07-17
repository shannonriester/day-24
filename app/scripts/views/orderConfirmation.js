import $ from 'jquery';
import Backbone from 'backbone';

import router from '../router';
import renderOrder from './renderOrder';
import orderSession from '../models/modelOrder';


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

    $orderForm.find('#submit').on('click', function(evt){
      evt.preventDefault();
      orderSession.save(null,{
          console.log('you logged a new order!');
        });
      });
    $orderForm.find('#clearBtn').on('click', function(evt){
      evt.preventDefault();
      $('.order-form-inputs').val('');
      $('textarea').val('');
      });

  return $orderForm;
}

export default renderConfirmation;
