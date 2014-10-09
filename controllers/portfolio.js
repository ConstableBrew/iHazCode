exports.install = function(framework) {
	framework.route('/', view_portfolio);
};

function view_portfolio() {
	var self = this;
	var portfolio = framework.model('PortfolioDisplay').create();
	var db = framework.db;


	// TODO: Put these in a database or config
	portfolio.header = "Michael Brewer";
	portfolio.subHeader = "Software Developer for Hire";


	portfolio.bodySections = db.bodySections;
	portfolio.contacts = db.contacts;

	self.layout('_layout');
	self.view('portfolio', portfolio);
}
