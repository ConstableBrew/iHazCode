var promisedMongo = require('promised-mongo');
var collections = ['contacts', 'projects', 'posts'];

console.log('Connecting to database: ' + process.env.MONGOLAB_URI);
var db = promisedMongo(
	//process.env.MONGOLAB_URI,
	//'ds053658.mongolab.com:53658/heroku_app19524016',
	'iHazCode:4izdccacq785xw29@ds053658.mongolab.com:53658/heroku_app19524016',
	collections
);

// Test connection is good
db.runCommand({ping:1}).then(function(res, err) {
    if (!err && res.ok) {
    	console.log('Db connection is good', res);
    } else {
    	console.log('Db connection is bad', res);
    }
}).catch(function(err) {
	console.log('Db Error!', err);
}).done(function(){console.log('Db test fulfilled');}, function(){console.log('DB test rejected!');});

db.GetData = GetData;
framework.db = db;

/*
	Example Usage:
	var x = framework.db['projects'].find({featured: true})
		.sort({impact: 1})
		.toArray() // #important! Needed to trigger the promise
		.then(success, err)
		.done(success, err); // #important! Needed to ensure proper err handling

	or equivelantly:
	var x = framework.db.GetData('projects', {featured: true}, {impact: 1});
*/

// Helper function that encapsulates the promise, ensuring
// proper cleanup is performed and returns the data array.
function GetData(collectionName, filter, sort) {
	filter = filter || {};
	var promise = db[collectionName].find(filter);

	if(typeof sort !== 'undefined') {
		promise.sort(sort);
	}

	return promise.toArray().done(fulfilled, rejected);

	function fulfilled() {
		return data;
	}
	function rejected (error) {
		console.log('DB Call Failed!\n', error, '\n\n');
		return [];
	}
}
