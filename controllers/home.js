exports.install = function(framework) {
	framework.route('/', view_homePage, ['get']);
	//framework.route('/', json_contactMe, ['post']);
};

function view_homePage() {
	var self = this;
	var model = framework.model('HomePage').create();
	var db = framework.db;

	model.dataPromise.then(function(){
		self.title('Software Developer | Michael K. Brewer');
		self.layout('_layout');
		self.view('home', model);
	});
}
