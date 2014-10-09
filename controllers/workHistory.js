exports.install = function(framework) {
	framework.route('/workHistory', get_workHistory);
};

function get_workHistory() {
	this.json(JSON.stringify(framework.db.workHistory));
}
