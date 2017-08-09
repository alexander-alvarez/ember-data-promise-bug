import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({

  store: inject.service(),

  model() {
    return this.get('store').findRecord('user', 1);
  }
});
