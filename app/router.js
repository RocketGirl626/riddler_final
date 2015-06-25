import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('riddles', function() {
    this.route('new-riddle');
    this.resource('riddle', {path: ':riddle_id'}, function() {
      this.route('new_answer');
    });
  });
});

export default Router;
