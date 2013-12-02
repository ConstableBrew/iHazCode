function Contact( data ){
  this.img = ko.observable(data.img);
  this.text = ko.observable(data.text);
  this.url = ko.observable(data.url);
}

function Header( data ){
  var mappedContacts = data.contact.map(function(item){ return new Contact(item); });
  this.title = ko.observable(data.title);
  this.subTitle = ko.observable(data.subTitle);
  this.contact = ko.observableArray(mappedContacts);
}

function BodySection( data ){
  this.title = ko.observable(data.title);
  this.subTitle = ko.observable(data.subTitle);
  this.body = ko.observable(data.body);
  this.items = ko.observableArray(data.items);
}


function PortfolioViewModel() {
  // Data
  var self = this;
  self.header = ko.observable();
  self.bodySections = ko.observableArray([]);
  
  // Load initial state from server
  $.getJSON( "/api/portfolio/body", function( data ){
    var mappedSections = $.map(data.bodySections, function(item){ return new BodySection(item); });
    self.header(new Header(data.header));
    self.bodySections(mappedSections);
  });
}