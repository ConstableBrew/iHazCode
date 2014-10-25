framework.GetContacts = GetContacts;
var _myContacts = null;
GetContacts();

function GetContacts() {
	framework.db['contacts']
		.find({})
		.toArray()
		.done(function(data) {
			_myContacts = data;
		});
	return _myContacts;
}