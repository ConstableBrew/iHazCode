
module.exports = {
	name: 'HomePage',
	create: function() { return new HomePage(); },
};
function HomePage() {
	debugger;
	this.projects = [];
	this.about = {};
}
HomePage = framework.model('iHazCodeBase').extend(HomePage);