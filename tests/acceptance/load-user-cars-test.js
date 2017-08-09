import { test } from 'qunit';
import moduleForAcceptance from 'ember-data-promise/tests/helpers/module-for-acceptance';
import { find } from 'ember-native-dom-helpers';

moduleForAcceptance('Acceptance | load user cars');

test('visiting /', function(assert) {
  server.createList('user', 10);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('#to-test').textContent, 'Hello Author 0, you drive a Pollich LLC');
  });
});
