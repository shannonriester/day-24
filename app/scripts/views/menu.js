import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import newData from '../collections/Items';
import subNav from './subNav';

function renderMenu() {
    // console.log(arguments);
    let $menuPage = $(`
    <div id="menu-main">
      <h2>Our Menu</h2>
      <div class="sub-nab"></div>
      <main>
        <h2>Apps</h2>
        <ul></ul>
      </main>
      <aside class="aside-order"><aside>
    </div>
    `);

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
        $menuPage.find('ul').append($menuItem);
      }

    let $ulContainer = $menuPage.find('ul');
    $('.appContainer').append($ulContainer);

    let args;
    $.ajax({
        url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json',
        data: 'GET',
        success: (response) => {
            let args = _.toArray(arguments);
            args.forEach((currentItem) => {
                response[currentItem].forEach(renderMenuItem);
            });
        }
    });
$('.appContainer').append($menuPage);
return $menuPage;
}
export default renderMenu;
