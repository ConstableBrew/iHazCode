exports.install = function(framework) {
	framework.route('/p/{projectId}', view_Project, ['get']);
};

function view_Project(projectId) {
	var self = this;
	var model = framework.model('ProjectDetails').create(projectId);
	var db = framework.db;

	model.dataPromise.then(function(){
		self.title('Software Developer | Michael K. Brewer');
		self.layout('_popover');
		self.view('project', model);
	});
}
