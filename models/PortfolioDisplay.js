exports.name = 'PortfolioDisplay';
exports.create = function() {
	return new PortfolioDisplay();
};

function PortfolioDisplay() {
	this.header = "";
	this.subHeader = "";
	this.bodySections = [];
	this.contacts = [];
}
