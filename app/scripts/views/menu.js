import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import user from '../models/username';
import orderCollection from '../collections/Orders';
import orderSession from '../models/modelOrder';
import renderOrder from './renderOrder';
import stickyScroll from './scrollSideOrder.js';

function renderMenu() {
    let $menuPage = $(`
    <div id="menu-main">
      <main>
        <h2 class="mealHeadings"></h2>
        <ul id="menu-list"></ul>
      </main>
      <aside class="aside-order"><aside>
    </div>
    `);
    // $('.aside-order').css('display', 'none');
    function renderMenuItem(orderItem) {
        let $menuItem = $(`
            <li>
              <h3>${orderItem.item} - </h3>
              <data class="data-prices">$${Number(orderItem.price).toFixed(2)}</data>
              <div>
                <p class="item-descritption">${orderItem.description}</p>
                <div class="icon-box">
                </div>
              </div>
            </li>
          `);
          if (isNaN(orderItem.price)){
            $menuItem.find('data').html(`
              <select name="select">
              <option value="value0">size</option>
              <option value="value1">small: $${_.toArray(orderItem.price)[0]} </option>
              <option value="value2">large: $${_.toArray(orderItem.price)[1]}</option>
              </select>
          `);
          }
          // console.log($('select[name="select"]'));

        $menuPage.find('.mealHeadings').text(location.hash.slice(6).toUpperCase());
        $menuPage.find('ul').append($menuItem);
        $menuItem.on('click', function() {
            orderSession.addItem(orderItem);
            orderSession.addTax();
            orderSession.addTotal();
        });
    }
    let args;
    let data = ({
        url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json',
        data: 'GET',
        success: (response) => {
            let args = _.toArray(arguments);
            $('#menu-list').empty();
            args.forEach((currentItem) => {
                response[currentItem].forEach(renderMenuItem);
            });
        }
    });
    $.ajax(data);

    return $menuPage;
}
export default renderMenu;
