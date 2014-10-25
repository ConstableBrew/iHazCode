exports.install = function(framework) {
	framework.route('/', view_homePage, ['get']);
	//framework.route('/', json_contactMe, ['post']);
};

function view_homePage() {
	debugger;
	var self = this;
	var model = framework.model('HomePage').create();
	var db = framework.db;

	Promise.allSettled([
		model.masthead,
		model.home,
		model.portfolio,
		model.about
	]).then(function(){
		self.title('Software Developer | Michael K. Brewer');
		self.layout('_layout');
		self.view('home', model);
	});
}
