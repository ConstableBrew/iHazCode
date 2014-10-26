module.exports = {
	name: 'HomePage',
	create: function() { return new HomePage(); },
};
function HomePage() {
	var self = this;

	self.masthead = {};
	self.work = {};
	self.portfolio = {};
	self.aboutme = {};
	self.social = {};
	self.contact = {};

	self.dataPromise = framework.db['posts']
		.find({_id: {$in: ['masthead', 'work', 'portfolio', 'aboutme', 'contact', 'social']}})
		.toArray()
		.then(function(data){
			data.forEach(function(e,i) {
				this[e._id || i] = e;
				console.log('fetched ' + (e._id || i));
			}, self);
		}, function(error){
			console.log('DB Error fetching posts', error);
		});
}
HomePage = framework.model('iHazCodeBase').extend(HomePage);