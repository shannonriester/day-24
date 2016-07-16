import $ from 'jquery';
import Backbone from 'backbone';

import renderLogin from './views/login';
import renderHeader from './views/header';
import renderNav from './views/nav';
import renderSubNav from './views/subNav';
import renderMenu from './views/menu';
import renderOrder from './views/renderOrder';
import orderSession from './models/modelOrder';


const Router = Backbone.Router.extend({
  routes: {
      login         :   'loginFunction',
      menu          :   'menuFunction',
      'menu/:meal'  :   'subNavFunction',
      order         :   'confirmOrderFunction'
      // '/order/:id':   'orderFunction'
  },

  loginFunction: function(){
    let $login = renderLogin();
    $('.appContainer').empty().append($login);
  },
  menuFunction: function(){
    let $menu = renderMenu();
    let $header = renderHeader();
    let $nav = renderNav();
    let $subNav = renderSubNav();
    let $order = renderOrder();
    $('.appContainer').empty().append($header).append($nav).append($subNav).append($menu);
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

    //need to do:
      //on the change of the 'added orderItem'
      orderSession.on('change', function(){
        let $newSideOrder = renderOrder();
        // console.log($newSideOrder, ' === $newSideOrder');
        $sideOrder.replaceWith($newSideOrder);
    });
      //make new element to put into DOM
      //empty old orderFunction and then add the new orderFunction


          //render order needs to listen for the change when you hit confirmation's submit button


    // $('.appContainer').empty().append($header).append($nav).append($subNav).append($menu).append($sideOrder);
  },
  confirmOrderFunction: function(){
    let $header = renderHeader();
    let $nav = renderNav();
    let $order = renderOrder();
    $('.appContainer').empty().append($header).append($nav).append($order);
  }
});


const router = new Router();

export default router;
