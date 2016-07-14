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
        <input id="enter-btn" type="button" name="enter" value="enter" />
        <input id="sign-up-btn" type="button" name="sign up" value="sign up" />
        <input type="button" name="skip..." value="skip..." />
      </div>
    </div>
`);

    $login.find('#enter-btn').on('click', function(evt) {
        evt.preventDefault();
        user.username = $('#input-username').val();
        $('input-username').val('');
        router.navigate('menu', {trigger: true});
        console.log(user.username, ' === user.username');
    });

    return $login;
}

export default renderLogin;
