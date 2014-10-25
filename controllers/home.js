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
		// Masthead
		db['posts']
			.find({_id: "masthead"})
			.toArray()
			.then(function(data){
				model.masthead = data[0] || {};
			}, function(error){
				console.log('DB Error fetching masthead post', error);
			}),,
		// Work
		db['posts']
			.find({_id: "work"})
			.toArray()
			.then(function(data){
				model.work = data[0] || {};
			}, function(error){
				console.log('DB Error fetching work post', error);
			}),
		// Portfolio
		db['projects']
			.find({featured: true})
			.sort({impact: 1})
			.toArray()
			.then(function(data){
				model.portfolio = data || [];
			}, function(error){
				console.log('DB Error fetching portfolio projects', error);
			}),
		// About Me
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
