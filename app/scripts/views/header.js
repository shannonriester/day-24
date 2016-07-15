import $ from 'jquery';
import Backbone from 'backbone';

import router from '../router';

function renderHeader(){
  let $header = $(`
    <header>
      <section class="login-section">
        <h2>Order up!</h2>
        <button class="login-btn">Login</button>
      </section>

      <section class="logo-section">
        <img sr="#" />
      </section>
    </header>
    `);

    $header.find('.login-btn').on('click', function(evt) {
        evt.preventDefault();
        router.navigate('login', {trigger: true});
    });

  return $header;
}

export default renderHeader;
