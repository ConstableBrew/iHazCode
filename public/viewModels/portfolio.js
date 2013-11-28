function PortfolioViewModel(){
	var self = this;
	self.data = {};
	
	$.get( "/api/portfolio", function( data ){
	  self.data = data;
	});
	
	self.body = ko.observableArray( self.data.body );
};

ko.applyBindings(new PortfolioViewModel());