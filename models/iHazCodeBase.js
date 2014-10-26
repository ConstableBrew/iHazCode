module.exports = {
	name: 'iHazCodeBase',
	create: function() {
		var model = new iHazCodeBase();
	},
	extend: function(child) { return Object.extends(child, iHazCodeBase)}
};

function iHazCodeBase() {
    this.dataPromise = Promise.resolve();
}
