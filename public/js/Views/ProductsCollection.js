MyApp.Views.ProductsCollection = Backbone.View.extend({

	tagName: "ul",

	initialize: function(){
		this.collection.on("add", this.addOne, this);
		this.render();
	},

	render: function(){

		this.collection.forEach(this.addOne, this);
	},

	addOne : function(item){
		
		var productView = new MyApp.Views.Product({ model : item });
		this.$el.append(productView.render().$el);
	}
});