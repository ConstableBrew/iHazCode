var promisedMongo = require('promised-mongo');
var collections = ['posts'];
var db = promisedMongo(process.env.MONGOLAB_URI, collections);
framework.db = db;

// Test connection is good
db.runCommand({ping:1}).then(function(res, err) {
    if (!err && res.ok) {
    	console.log('Db connection is good', res);
    } else {
    	console.log('Db connection is bad', res);
    }
}).catch(function(err) {
	console.log('Db Error!', err);
});
