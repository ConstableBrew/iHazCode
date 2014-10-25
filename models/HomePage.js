module.exports = {
	name: 'HomePage',
	create: function() { return new HomePage(); },
};
function HomePage() {
	var self = this;

	this.masthead = framework.db['posts']
		.find({_id: "masthead"})
		.toArray()
		.then(function(data){
			self.masthead = data[0] || {};
		}, function(error){
			console.log('DB Error fetching masthead post', error);
		});
	this.work = framework.db['posts']
		.find({_id: "work"})
		.toArray()
		.then(function(data){
			self.work = data[0] || {};
		}, function(error){
			console.log('DB Error fetching work post', error);
		});
	this.portfolio = framework.db['projects']
		.find({featured: true})
		.sort({impact: 1})
		.toArray()
		.then(function(data){
			self.portfolio = data || [];
		}, function(error){
			console.log('DB Error fetching portfolio projects', error);
		});
	this.about = framework.db['posts']
		.find({_id: "aboutme"})
		.toArray()
		.then(function(data){
			self.about = data[0] || {};
		}, function(error){
			console.log('DB Error fetching about post', error);
		});

	return self;
}
HomePage = framework.model('iHazCodeBase').extend(HomePage);