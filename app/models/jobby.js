import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('String'),
  company: DS.attr('String')
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
           	name: "Complete Ember.js Tutorial",
            company: "google"
        },
        {
            id: 2,
           	name: "Checkout some more ember stuff",
            company: "godaddy"
        },
        {
            id: 3,
           	name: "Solve world hunger (with Ember)",
            company: ""
        }
    ]
});
