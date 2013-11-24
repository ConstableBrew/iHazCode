function PortfolioViewModel(){
  var self = this;
  
  self.body = ko.observableArray( data.body );
};

ko.applyBindings(new PortfolioViewModel());