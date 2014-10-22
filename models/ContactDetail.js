exports.name = 'ContactDetail';
exports.create = function() {
	return new ContactDetail();
};

function ContactDetail() {
	this.title = "";
	this.href = "";
	this.imgSrc = "";
	this.text = "";
}
