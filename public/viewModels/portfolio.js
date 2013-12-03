function Contact( data ){
  this.img  = ko.observable(data.img);
  this.text = ko.observable(data.text);
  this.url  = ko.observable(data.url);
}

function Item( data ){
  this.itemName   = ko.observable(data.itemName);
  this.itemDetail = ko.observable(data.itemDetail);
}


function BodySection( data ){
  var mappedItems = data.items.map(function(item){ return new Item(item); });
  this.title    = ko.observable(data.title);
  this.subTitle = ko.observable(data.subTitle);
  this.body     = ko.observable(data.body);
  this.items    = ko.observableArray(mappedItems);
}


function PortfolioViewModel(){
  // Data
  var self = this;
  self.title        = ko.observable();
  self.subTitle     = ko.observable();
  self.contact      = ko.observableArray([]);
  self.bodySections = ko.observableArray([]);
  
  // Load initial state from server
  $.getJSON( "/api/portfolio", function( data ){
    var mappedContacts = data.contact.map(function(item){ return new Contact(item); }),
    mappedSections = data.bodySections.map(function(item){ return new BodySection(item); });
    
    self.title(data.header);
    self.subTitle(data.subHeader);
    self.contact(mappedContacts);
    self.bodySections(mappedSections);
  });
}

ko.applyBindings(new PortfolioViewModel());