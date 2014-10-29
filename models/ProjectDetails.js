module.exports = {
	name: 'ProjectDetails',
	create: function(projectId) { return new ProjectDetails(projectId); },
};
function ProjectDetails(projectId) {
	var self = this;

	self.title = '';
	self.subTitle = '';
	self.content = '';
	self.techStack = [];
	self.thumbnail = '';
	self.full = '';
	console.log('Project ' + projectId);

	self.dataPromise = framework.db['projects']
		.find({_id: projectId})
		.toArray()
		.then(function(data){
			data = data[0];
			self.title = data.title || '';
			self.subTitle = data.subTitle || '';
			self.content = data.content || '';
			self.techStack = data.techStack || [];
			self.thumbnail = data.thumbnail || '';
			self.full = data.full || '';
		}, function(error){
			console.log('DB Error fetching projects', error);
		});
}
ProjectDetails = framework.model('iHazCodeBase').extend(ProjectDetails);