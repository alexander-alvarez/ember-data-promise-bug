import Ember from 'ember';
import RSVP from 'rsvp';

const { inject } = Ember;

export default Ember.Route.extend({

  store: inject.service(),

  model() {
    return RSVP.all([
      this.get('store').findRecord('user', 1),
      this.get('store').findRecord('user', 2),
      this.get('store').findRecord('user', 3)
    ]);
  }
});
