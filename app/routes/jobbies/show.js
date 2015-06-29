import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		console.log(params.jobby_id);
        return this.store.find('jobby',params.jobby_id);
    }

});
