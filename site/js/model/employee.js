var app = app || {};

   app.Employee = Backbone.Model.extend({
   	defaults: {
   		name: 'Unknown',
   		email: 'abc@nisum.com',
   		phone: '999999999',
   		designation: 'Unknown'
   	}
   })