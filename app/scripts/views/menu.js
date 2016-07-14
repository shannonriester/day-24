import $ from 'jquery';
import Backbone from 'backbone';


function renderMenu(){

  let $menuPage = $(`
    <div id="menu-main">
      <h2>Our Menu</h2>
      <main></main>
      <aside class="aside-order"><aside>
    </div>
    `);

  return $menuPage;
}




export default renderMenu;
