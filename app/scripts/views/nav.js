import $ from 'jquery';
import router from '../router';

function renderNav () {
  let $nav = $(`
      <h1>Menu</h1>
      <ul class="nav">
        <li>Menu</li>
        <li>Order</li>
      </ul>
    `);

  $nav.find('li').on('click', function(evt){
    evt.preventDefault();
    let $navLink = $(this)[0].innerText.toLowerCase();
    router.navigate($navLink, {trigger: true});
  });

  return $nav;
}

export default renderNav;
