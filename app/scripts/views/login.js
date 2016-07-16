import $ from 'jquery';
import Backbone from 'backbone';

import router from '../router';
import user from '../models/username';

function renderLogin() {
    let $login = $(`
    <div id="login-page">
      <div class="login-modal">
        <h1>Shanni-Sais-Quoi</h1>
        <input id="input-username" type="text" name="username" placeholder="username..." />
        <input id="enter-btn" class="go-to-menu" type="button" name="enter" value="enter" />
        <input id="sign-up-btn" type="button" name="sign up" value="sign up" />
        <input id="skip..." class="go-to-menu" type="button" name="skip..." value="skip..." />
      </div>
    </div>
`);

    $login.find('.go-to-menu').on('click', function(evt) {
        evt.preventDefault();
        // if (user.username.val(' ')){
          // $login.shake();
        // }
        user.username = $('#input-username').val();
        $('input-username').val('');
        router.navigate('menu', {trigger: true});
        console.log(user.username, ' === user.username');
    });
    $login.find('#sign-up-btn').on('click', function(evt) {
        evt.preventDefault();
        $('input-username').val('');
        router.navigate('register', {trigger: true});
        console.log(user.username, ' === user.username');
    });

    return $login;
}

export default renderLogin;
