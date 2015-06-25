import DS from 'ember-data';

export default DS.Model.extend({
  riddle: DS.belongsTo('riddle', {async: true}),
  answer_date: DS.attr('string'),
  answer_text: DS.attr('string')

});
