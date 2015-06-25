import Ember from 'ember';

export default Ember.Controller.extend({
  needs:['riddle'],
  actions: {
    addAnswer: function() {
      var newAnswer =  this.store.createRecord('answer', {
        answer_date: this.get('answer_date'),
        answer_text: this.get('answer_text')
      });
      newAnswer.save();

      var riddle = this.get('controllers.riddle.model');
      riddle.get('answers').pushObject(newAnswer);
      riddle.save();

      this.setProperties({
        answer_date: '',
        answer_text: ''
      });

      this.transitionToRoute('riddle', riddle.id);
    }
  }
});
