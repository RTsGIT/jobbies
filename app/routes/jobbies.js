import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.find('jobby');
    },
    searchResult: function(){
        var searchTerm = this.get('searchTerm');
        console.log(searchTerm);
        // var regExp = new RegExp(searchTerm,'i');
        // this.get('model').set('content',this.store.filter('todo',function(item){
        //     return regExp.test(item.get('title'));
        // }));
    }.observes('searchTerm')

});
