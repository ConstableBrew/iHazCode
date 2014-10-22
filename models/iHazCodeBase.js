module.exports = {
	name: 'iHazCodeBase',
	create: function() {
		var model = new iHazCodeBase();
	},
	extend: function(child) { return Object.extends(child, iHazCodeBase)}
};

function iHazCodeBase() {
	debugger;
	var self = this;
	self.contacts =	[];
	return framework.db['contacts'].find({}).toArray()
		.then(function(data) {
			self.contacts = data;
			return self;
		});
}
