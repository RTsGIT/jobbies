// import Ember from 'ember';

// export default Ember.Controller.extend({
	
// 	actions:{login:function(model){
// 		console.log(this.get('name'));
// 		console.log(this.get('company'));
// 		console.log(this.get('password'));
// 	}
// }
// });

import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:oauth2-password-grant'
});
