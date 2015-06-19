import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('riddles', function() {
    this.route('new_riddle');
  });

  this.route('riddle', {path: 'riddles/:riddle_id'});

  this.resource('answers', function() {
    this.route('new_answer');
  });

  this.route('riddles');
});

export default Router;
