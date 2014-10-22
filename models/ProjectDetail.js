exports.name = 'ProjectDetail';
exports.create = function() {
	return new ProjectDetail();
};

function ProjectDetail() {
	this.title = "";
	this.subTitle = "";
	this.excerpt = "";
	this.content = "";
	this.thumbnail = "";
	this.features = [];
}
