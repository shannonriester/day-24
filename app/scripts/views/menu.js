import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import user from '../models/username';
import orderCollection from '../collections/Orders';
import createOrder from './createOrder';
// import subNav from './subNav';

function renderMenu() {
    let $menuPage = $(`
    <div id="menu-main">
      <h2>Our Menu</h2>
      <div class="sub-nab"></div>
      <main>
        <h2 class="mealHeadings"></h2>
        <ul id="menu-list"></ul>
      </main>
      <aside class="aside-order"><aside>
    </div>
    `);

    function renderMenuItem(menuItem) {
        let $menuItem = $(`
            <li>
              <h3>${menuItem.item}</h3>
              <data>$${menuItem.price}</data>
              <div>
                <p class="item-descritption">${menuItem.description}</p>
                <div class="icon-box"></div>
              </div>
            </li>
          `);

          $menuPage.find('.mealHeadings').text(location.hash.slice(6).toUpperCase());
          if (menuItem.item === menuItem.description){
            $menuPage.find('ul').append($menuItem);
            $menuPage.find('.item-descritption').empty();
          }
          $('#menu-list').append($menuItem);
          $menuItem.find('h3').on('click', createOrder);
      }

    let args;
    $.ajax({
        url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json',
        data: 'GET',
        success: (response) => {
            // console.log(response.title);
            let args = _.toArray(arguments);
            $('#menu-list').empty();
            args.forEach((currentItem) => {
                response[currentItem].forEach(renderMenuItem);
            });
        }
    });
return $menuPage;
}
export default renderMenu;
