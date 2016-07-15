import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import newData from '../collections/Items';
import subNav from './subNav';

function renderMenu() {
    let $menuPage = $(`
    <div id="menu-main">
      <h2>Our Menu</h2>
      <div class="sub-nab"></div>
      <main>
        <h2></h2>
        <ul id="menu-list"></ul>
      </main>
      <aside class="aside-order"><aside>
    </div>
    `);
    let $ulContainer = $menuPage.find('ul');
    $('.appContainer').append($ulContainer);

    function renderMenuItem(menuItem) {
      let $menuItem = $(`
          <li>
            <h3>${menuItem.item}</h3>
            <div>
              <p>${menuItem.description}</p>
              <div class="icon-box"></div>
            </div>
          </li>
        `);
        console.log($menuPage);
        $('#menu-list').append($menuItem);
      }

    let args;
    $.ajax({
        url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json',
        data: 'GET',
        success: (response) => {
            let args = _.toArray(arguments);
            $('#menu-list').empty();

            args.forEach((currentItem) => {
              console.log(currentItem);
                response[currentItem].forEach(renderMenuItem);
            });
        }
    });
return $menuPage;
}
export default renderMenu;
