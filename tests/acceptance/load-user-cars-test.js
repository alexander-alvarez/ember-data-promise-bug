import { test } from 'qunit';
import moduleForAcceptance from 'ember-data-promise/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | load user cars');

test('visiting /load-user-cars', function(assert) {
  visit('/load-user-cars');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
