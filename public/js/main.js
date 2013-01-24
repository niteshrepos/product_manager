
var products = new MyApp.Collection.Products();

products.fetch().then(function(){

	var productsView = new MyApp.Views.ProductsCollection({
		collection : products
	});

	$(".tasklist").html(productsView.el);
	
});

new MyApp.Views.AddProduct({
	collection: products
});

