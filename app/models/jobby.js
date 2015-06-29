import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('String'),
  company: DS.attr('String')
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
           	name: "Raja",
            company: "google"
        },
        {
            id: 2,
           	name: "Ravi",
            company: "godaddy"
        },
        {
            id: 3,
           	name: "Teja",
            company: "microsoft"
        },
        {
            id: 4,
           	name: "Panidepu",
            company: "Parrot"
        },
        {
            id: 5,
           	name: "Ravi Teja",
            company: "Tesla"
        }
    ]
});
