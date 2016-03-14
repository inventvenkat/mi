Places = new Mongo.Collection("places");
Seasons = new Mongo.Collection("seasons");
Items = new Mongo.Collection("items");
Brands = new Mongo.Collection("brands");

if(Meteor.isClient) {

Template.body.helpers({
	places: function(){
		return Places.find({},{sortAt: {createdAt:-1}});//to display places	
	}
});
Template.body.helpers({
	seasons: function(){
		return Seasons.find({},{sortAt: {createdAt:-1}});//to display seasons	
	}

});
Template.body.helpers({
	items: function(){
		return Items.find({},{sortAt: {createdAt:-1}});//to display accesories	
	}

});
Template.body.helpers({
	brands: function(){
		return Brands.find({},{sortAt: {createdAt:-1}});//to display brands	
	}
});


}
