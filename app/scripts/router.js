import $ from 'jquery';
import Backbone from 'backbone';

import renderLogin from './views/login';
import $header from './views/header';
import $nav from './views/nav';
import renderMenu from './views/menu';

const Router = Backbone.Router.extend({

  routes: {
      login       :   'loginFunction',
      menu        :   'menuFunction',
      '/order'    :   'orderFunction',
      '/order/:id':   'orderFunction'
  },

  loginFunction: function(){
    let $login = renderLogin();
    $('.appContainer').empty().append($login);
  },
  menuFunction: function(){
    let $menu = renderMenu();
    $('.appContainer').empty().append($header).append($nav).append($menu);
  },
  orderFunction: function(){

  }
});


const router = new Router();

export default router;
