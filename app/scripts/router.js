import $ from 'jquery';
import Backbone from 'backbone';

import renderLogin from './views/login';
import renderHeader from './views/header';
import $nav from './views/nav';
import renderSubNav from './views/subNav';
import renderMenu from './views/menu';

import newData from './collections/Items';


const Router = Backbone.Router.extend({
  routes: {
      login         :   'loginFunction',
      menu          :   'menuFunction',
      'menu/:meal'  :   'subNavFunction',
      '/order'      :   'orderFunction'
      // '/order/:id':   'orderFunction'
  },

  loginFunction: function(){
    let $login = renderLogin();
    $('.appContainer').empty().append($login);
  },
  menuFunction: function(){
    let $menu = renderMenu();
    let $header = renderHeader();
    let $subNav = renderSubNav();
    $('.appContainer').empty().append($header).append($nav).append($subNav).append($menu);
  },
  subNavFunction: function(meal){
    let $menu = renderMenu();
    let $header = renderHeader();
    let $subNav = renderSubNav();

    if (meal === 'breakfast') {
      $menu = renderMenu('breakfast');
    } else if (meal === 'lunch') {
      $menu = renderMenu('sandwiches', 'soups', 'salads');
    } else if (meal === 'desserts') {
      $menu = renderMenu('desserts', 'veraDesserts');
    } else if (meal === 'extras') {
      $menu = renderMenu('toppings', 'sides', 'drinks');
    }
    $('appContainer').empty().append($header).append($nav).append($subNav).append($menu);
  },
  orderFunction: function(){

  }
});


const router = new Router();

export default router;
