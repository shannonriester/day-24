import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import user from '../models/username';
import orderCollection from '../collections/Orders';
import orderSession from '../models/modelOrder';
import renderOrder from './renderOrder';

function renderMenu() {
    let $menuPage = $(`
    <div id="menu-main">
      <section></section>
      <div class="sub-nab"></div>
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
              <data>$${orderItem.price/*.toFixed(2)*/}</data>
              <div>
                <p class="item-descritption">${orderItem.description}</p>
                <div class="icon-box"></div>
              </div>
            </li>
          `);

        $menuPage.find('.mealHeadings').text(location.hash.slice(6).toUpperCase());
        // if (orderItem.item !== orderItem.description) {
        // } else if (orderItem.item === orderItem.description) {
        //     $menuPage.find('ul').append($menuItem);
        //     $menuPage.find('.item-descritption').empty();
        //     $('#menu-list').append($menuItem);
        // }

        $menuPage.find('ul').append($menuItem);
        $menuItem.on('click', function() {
            orderSession.addItem(orderItem);
        });
    }

    let args;
    let data = ({
        url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json',
        data: 'GET',
        success: (response) => {
            // console.log(response);
            let args = _.toArray(arguments);
            // console.log(args);
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
