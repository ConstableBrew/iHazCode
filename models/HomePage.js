
module.exports = {
	name: 'HomePage',
	create: function() { return new HomePage(); },
};
function HomePage() {
	debugger;
	this.masthead = {};
	this.work = {};
	this.portfolio = [];
	this.about = {};

}
HomePage = framework.model('iHazCodeBase').extend(HomePage);