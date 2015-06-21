import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addAnswer: function() {
      var newAnswer =  this.store.createRecord('answer', {
        name: this.get('answer_text')
      });
      newAnswer.save();
      this.setProperties({
        name: ''
      });
    }
  }
});
