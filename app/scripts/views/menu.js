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

    function renderMenuItem(orderItem) {
        let $menuItem = $(`
            <li>
              <h3>${orderItem.item} - </h3>
              <data class="data-prices">$${Number(orderItem.price).toFixed(2)}</data>
              <i class="fa fa-plus plusIconRight" aria-hidden="true"></i>
              <div>
                <p class="item-descritption">${orderItem.description}</p>
                <div class="icon-box">
                </div>
              </div>
            </li>
          `);
        let $addIcon = $menuItem.find('.plusIconRight');

        if (isNaN(orderItem.price)) {
            let subpriceArr = _.toArray(orderItem.price);
            $menuItem.find('data').html(`
              <select class="sizeItem" name="select">
              <option class="option0" value="value0">size</option>
              <option class="option1" value="value1">small: $${subpriceArr[0]} </option>
              <option class="option2" value="value2">large: $${subpriceArr[1]}</option>
              </select>
          `);
            let sizeItemArr = _.toArray($menuItem.find('.sizeItem'));
            // console.log(sizeItemArr);
            sizeItemArr.forEach(() => {
                $addIcon.on('click', () => {
                    let $sizeItemVal = $('.sizeItem :selected').val();
                    if ($sizeItemVal === 'value1') {
                        orderItem.price = subpriceArr[0];
                    } else if ($sizeItemVal === 'value2') {
                        orderItem.price = subpriceArr[1];
                    } else {
                        orderSession.deleteItem(orderItem);
                    }
                });
            });

        }

        $menuPage.find('.mealHeadings').text(location.hash.slice(6).toUpperCase());
        $menuPage.find('ul').append($menuItem);
        $addIcon.on('click', () => {
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
