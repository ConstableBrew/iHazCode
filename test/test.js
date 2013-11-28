var expect 	= require('expect.js');
var Browser = require('zombie');

var browser = new Browser();
browser.visit('http://localhost:5000/')
	.then(function(){
		expect(browser.text('title')).to.be('Portfolio - Michael Brewer');
		if(browser.error){
			console.log('Errors reported:',browser.errors);
		}
	});