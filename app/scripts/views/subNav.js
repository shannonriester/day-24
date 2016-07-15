import $ from 'jquery';
import Backbone from 'backbone';

import router from '../router';
import user from '../models/username';

function renderSubNav() {
    let $subNav = $(`
      <ul id="ul-sub-nav">
        <li class="liSubNav">breakfast</li>
        <li class="liSubNav">lunch</li>
        <li class="liSubNav">desserts</li>
        <li class="liSubNav">extras</li>
      </ul>
`);

    $subNav.find('.liSubNav').on('click', function(evt) {
        evt.preventDefault();
        let subMenuMeal = this.innerText;
        router.navigate('menu/' + subMenuMeal, {trigger: true});
        
    });

    return $subNav;
}

export default renderSubNav;
