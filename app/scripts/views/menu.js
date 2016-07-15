import $ from 'jquery';
import Backbone from 'backbone';

import newData from '../collections/Items';
import subNav from './subNav';

function renderMenu(){
  console.log(arguments);
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

  let data;
  $.ajax({
    url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json',
    data: 'GET',
    dataType: 'json',
    success: (response) => {
      let breakfastObj = response['breakfast'];
      // breakfastObj.on('add',renderMenuItem);
      breakfastObj.forEach(renderMenuItem);
    }
  });

    function renderMenuItem(menuItem){
      let $menuItem = $(`
          <li>
            <h3>${menuItem.item}<span.......................23span></h3>
            <div>
              <p>${menuItem.description}</p>
              <div class="icon-box"></div>
            </div>
          </li>
        `);
        $menuPage.find('ul').append($menuItem);
    }
  return $menuPage;
}

export default renderMenu;
