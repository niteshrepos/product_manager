
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

var mongo = require("mongodb");
var dbHost = "localhost";
var dbPort = mongo.Connection.DEFAULT_PORT;

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
 
  app.use(express.static(path.join(__dirname, 'public')));
});



var db = new mongo.Db("store", new mongo.Server(dbHost, dbPort));
db.open(function(err){
  db.collection("products", function(err, collection){
  
  app.get("/users", function(req, res){
    getProduct(collection, {}, function(cursor){
      cursor.toArray(function(err, products){
        res.send(products);
      });
    });
  });

  app.post("/users", function(req, res){
    insertProduct(collection, { "title" : req.body.title, "category" : req.body.category});
    res.send("done");
  });

  app.delete("/users", function(req, res){
    
    deleteProduct(collection, req.body.id);
    res.send("deleted");
  });
  
  app.put("/users", function(req, res){
    

    updateProduct(collection, req.body.id, {title : req.body.title,category: req.body.category});
    res.send("update done");
  });

  });
});

var insertProduct = function(collection, newItem, callback){
  collection.insert(newItem);
};

var getProduct = function(collection, query, callback){
  callback(collection.find(query));
};

var deleteProduct = function(collection, id){
  collection.remove({_id : new mongo.ObjectID(id)});
};

var updateProduct = function(collection, id, newItem){
  collection.update({_id : new mongo.ObjectID(id)}, newItem);
};




http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
