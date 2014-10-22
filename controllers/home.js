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
		model,
		db['projects']
			.find({featured: true})
			.sort({impact: 1})
			.toArray()
			.then(function(data){
				model.projects = data;
			}, function(error){
				console.log('DB Error fetching projects', error);
			}),
		db['posts']
			.find({_id: "aboutme"})
			.toArray()
			.then(function(data){
				model.about = data[0] || {};
			}, function(error){
				console.log('DB Error fetching about post', error);
			})
	]).then(function(){
		debugger;
		self.title('Software Developer | Michael K. Brewer');
		self.layout('_layout');
		self.view('home', model);
	});
}
