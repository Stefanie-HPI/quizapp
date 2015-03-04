import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  points: DS.attr('integer', { defaultValue: 0 }),
});

User.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Joe', points: 3 },
    { id: 2, name: 'Jane', points: 2 },
  ]
});

export default User;
