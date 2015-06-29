import Ember from 'ember';

export default Ember.Controller.extend({
	searchResult: function(){
        var searchTerm = this.get('searchTerm');
        var regExp = new RegExp(searchTerm,'i');
        this.get('model').set('content',this.store.filter('jobby',function(item){
            return regExp.test(item.get('company'));
        }));
    }.observes('searchTerm')
});
