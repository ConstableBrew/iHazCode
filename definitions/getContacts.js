framework.GetContacts = GetContacts;
var _myContacts = null;
GetContacts();

function GetContacts() {
	framework.db['posts']
		.find({_id : "social"})
		.toArray()
		.done(function(data) {
			_myContacts = data.collection;
		});
	return _myContacts;
}