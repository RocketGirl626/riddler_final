import DS from 'ember-data';

export default DS.Model.extend({
  riddle_name: DS.attr('string'),
  riddle_text: DS.attr('string')
});
