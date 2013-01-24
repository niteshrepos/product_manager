MyApp.Views.Product = Backbone.View.extend({

	tagName :"li",

	template : _.template($("#taskTemplate").html()),
		
	events : {
		"click .edit" : "editProduct",
		"click .delete" : "destroy"
	},

	editProduct: function(){
		var newVal = prompt(this.model.get("title"));
		this.model.set("title", newVal);
		this.model.save();

	},

	destroy : function(){
		this.model.destroy();
	},
	
	initialize: function(){
		this.model.on("change", this.render, this);
		this.model.on("destroy", this.remove, this);
	},

	remove: function(){
		this.$el.remove();
	},

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});
