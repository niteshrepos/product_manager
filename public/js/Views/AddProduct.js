MyApp.Views.AddProduct = Backbone.View.extend({

	el: ".addTask",

	events: {
		"click .submit": "addProduct"
	},

	addProduct: function(e){

		var newProductTitle = $(".inputText").val();
		
		(!!newProductTitle)?this.collection.add({title: newProductTitle}): "";
		
		e.preventDefault();
		return false;
	},

	initialize: function(){
		
	},

	render: function(){

	}
});