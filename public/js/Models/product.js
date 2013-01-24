MyApp.Models.Product = Backbone.Model.extend({
	defaults  : {
		title : "",
		category : "genral"
	},

	validate: function(attrs){
		
		if (attrs.title === "") {
			return "please enter a valid values";
		}
	}
});