import DS from 'ember-data';

export default DS.Model.extend({
  answers: DS.hasMany('answer', {asynch: true}),
  riddle_name: DS.attr('string'),
  riddle_text: DS.attr('string')
});
