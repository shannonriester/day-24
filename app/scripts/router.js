import $ from 'jquery';
import Backbone from 'backbone';
import moment from 'moment';

import orderSession from './models/modelOrder';

import renderLogin from './views/login';
import renderHeader from './views/header';
import renderNav from './views/nav';
import renderSubNav from './views/subNav';
import renderMenu from './views/menu';
import renderOrder from './views/renderOrder';
import renderConfirmation from './views/orderConfirmation';

// import stickyScroll from './views/scrollSideOrder.js';

const Router = Backbone.Router.extend({
  routes: {
      '/*'          :   'menuFunction',
      login         :   'loginFunction',
      menu          :   'menuFunction',
      'menu/:meal'  :   'subNavFunction',
      order         :   'confirmOrderFunction'
      // '/order/:id'  :   'orderFunction'
  },

  loginFunction: function(){
    let $login = renderLogin();
    $('.appContainer').empty().append($login);
  },
  menuFunction: function(){
    if (moment().format('a') === 'am'){
      router.navigate('menu/breakfast', {trigger:true});
    } else {
      router.navigate('menu/lunch', {trigger:true});
    }
  },
  subNavFunction: function(meal){
    let $menu = renderMenu();
    let $header = renderHeader();
    let $nav = renderNav();
    let $subNav = renderSubNav();
    let $sideOrder = renderOrder();
      if (meal === 'breakfast') {
        $menu = renderMenu('breakfast');
      } else if (meal === 'lunch') {
        $menu = renderMenu('sandwiches', 'soups', 'salads');
      } else if (meal === 'desserts') {
        $menu = renderMenu('desserts', 'veraDesserts');
      } else if (meal === 'extras') {
        $menu = renderMenu('toppings', 'sides', 'drinks');
      }
    $('.appContainer').empty()
                      .append($header)
                      .append($nav)
                      .append($subNav)
                      .append($menu)
                      .append($sideOrder);

      orderSession.on('change', function(){
      let $newSideOrder = renderOrder();
      $('.side-order').replaceWith($newSideOrder);
  });
  },
  confirmOrderFunction: function(){
    let $header = renderHeader();
    let $nav = renderNav();
    let $order = renderOrder();
    // $order.fadeIn(1000);
    let $orderForm = renderConfirmation();

    $('.appContainer').empty().append($header).append($nav).append($order).append($orderForm);
    $('#orderBtn').css('display', 'none');
    let $confirmationDiv = $('#ordered-list');
    $confirmationDiv.addClass('confirmation-view');

    orderSession.on('change', function(){
      let $newSideOrder = renderOrder();
      $('#ordered-list').replaceWith($newSideOrder);
    });
  }
});


const router = new Router();

export default router;
