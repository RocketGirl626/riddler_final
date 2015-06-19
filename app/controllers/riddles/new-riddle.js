import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addRiddle: function() {
      var newRiddle =  this.store.createRecord('riddle', {
        riddle_name: this.get('riddle_name'),
        riddle_text: this.get('riddle_text')
      });
      newRiddle.save();
      this.setProperties({
        riddle_name: '',
        riddle_text: ''
      });
    }
  }
});
