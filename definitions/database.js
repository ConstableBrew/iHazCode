var config = framework.config;
var pmongo = require('promised-mongo');

var db = pmongo(String(config['mongo.url']).format(
		config['mongo.user'],
		config['mongo.pass'],
		config['mongo.port'],
		config['mongo.database']
	),
	JSON.parse(config['mongo.collections'])
);


// Our database is super small, so we cache the whole thing in server memory
console.log('Fetching data...');
framework.db = {};
Promise.allSettled([
	fetchCollection('contacts'),
	fetchCollection('bodySections', {sort: 1}),
	fetchCollection('workHistory')
])
.then(function(){
	// TODO: This shouldn't be reported until everything is done...
	console.log('finished fetching data');
})
.done();

function fetchCollection(collectionName, sort){
	var promise = db[collectionName].find();

	if(typeof sort !== 'undefined') {
		promise.sort(sort);
	}

	return promise.toArray().then(
		function (collection) {
			if (!collection || collection.length == 0) {
				throw 'No ' + collectionName + ' documents found';
			}
			else {
				console.log('fetched ' + collectionName);
				framework.db[collectionName] = collection;
			}
		}
	).catch(
		function (error) {
			console.log('Failed!\n', error, '\n\n');
		}
	).done();
}
