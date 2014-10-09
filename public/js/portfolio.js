// Load initial state from server
$.getJSON( "/workHistory", function( data ){
	debugger;
	data = JSON.parse(data);
	var nodeMap = {};
	var nodes = [];
	var links = [];
	var i, j, n;
	for(i=0; i<data.length; ++i){
		nodeMap[data[i]._id] = i;
		data[i].id = i;
	}
	for(i=0; i<data.length; ++i){
		n = data[i];
		nodes.push(n);
		for(j=0; n.links && j<n.links.length; ++j){
			l = n.links[j];
			links.push({source: i, target: nodeMap[l], class: 'nodelink'});
		}
	}

	WorkHistoryForceDirectedGraph({nodes: nodes, links: links});
});

function WorkHistoryForceDirectedGraph( data ){
	//Shamelessly stolen from http://bl.ocks.org/couchand/6420534
	const NODE_WIDTH = 40,
	NODE_HEIGHT = 12,
	LEAF_NODE_WIDTH = 10
	LEAF_NODE_HEIGHT = 5;

	var node, link, text;
	var container = document.getElementById('viz');
	var dragging = false;
	var width = container.offsetWidth;
	var height = container.offsetHeight;
	var svg = d3.select('#viz')
		.append('svg')
		.attr('width', '100%')
		.attr('height', '100%');
	var tips = d3.select('#tips');
	var force = d3.layout.force()
		.charge(function(d){ return (d.class.indexOf('node')!=-1?-500:-75); })
		.linkDistance(function(d){ return (d.class.indexOf('nodelink')!=-1?80:45); })
		.linkStrength(0.5)
		.friction(0.75)
		.gravity(0.2)
		.size([width, height]);

	function draw(){
		node.attr('transform', function(d){
			return 'translate(' +
				(d.x - (d.class=='node'?NODE_WIDTH:LEAF_NODE_WIDTH) ) + ',' +
				(d.y - (d.class=='node'?NODE_HEIGHT:LEAF_NODE_HEIGHT) ) +
			')';
		});
		link.attr('x1', function(d){ return d.source.x; })
			.attr('y1', function(d){ return d.source.y; })
			.attr('x2', function(d){ return d.target.x; })
			.attr('y2', function(d){ return d.target.y; });

	}

	//Add leaf nodes for skills
	data.nodes.forEach(function(d, i) {
		d.id = i;
		d.class = d.class + ' node';
		d.skillCloud.forEach(function(e, j) {
			data.nodes.push({'label':e, 'class':'leaf', 'projectName': d.projectName, 'description': d.description, 'url':''});
			data.links.push({'class':'leaflink', 'source':i, 'target':data.nodes.length-1});
		});
	});

	force.on('tick', draw);


	link = svg.selectAll('.link')
		.data( data.links )
		.enter().append('line')
		.attr('class', function(d) { return d.class; });

	node = svg.selectAll('.node')
		.data( data.nodes )
		.enter().append('g')
		.attr('class', function(d) { return d.class; })
		.on('mouseover', function(d) {
			tips.html(
				'<h2>' + d.projectName + '</h2>' +
				'<div>' + d.description + '</div>'
			);
			debugger;
			data.links.forEach(function(l){
				if ((l.source.id==d.id || l.target.id==d.id) && l.class=='leaflink') {
					l.class += ' show';
				}
			})

		})
		.on('mousedown', function(){ d3.event.preventDefault(); })
		.on('mouseup', function(d) {
			/*
			if( typeof d.url !== 'undefined' && d.url !== ''){
				//Open url in new tab
				(function(a){
					document.body.appendChild(a);
					a.setAttribute('href', d.url);
					a.dispatchEvent((
						function(e) {
							e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, true, false, false, false, 0, null);
							return e
						}(document.createEvent('MouseEvents'))
					));
				}(document.createElement('a')));
			}
			*/
		})
		.on('mouseout', function (d) {
		});

	node.call(force.drag);

	node.append('rect')
		.attr('class', function(d) { return d.class; })
		.attr('width', function(d) { return 2*(d.class.indexOf('node')!=-1?NODE_WIDTH:LEAF_NODE_WIDTH); })
		.attr('height', function(d) { return 2*(d.class.indexOf('node')!=-1?NODE_HEIGHT:LEAF_NODE_HEIGHT); })
		.attr('rx', function(d) { return (d.class.indexOf('node')!=-1?0:LEAF_NODE_WIDTH*2); })
		.attr('ry', function(d) { return (d.class.indexOf('node')!=-1?NODE_HEIGHT:LEAF_NODE_HEIGHT*2); });

	node.append('svg:text')
		.attr('class', 'label')
		.attr('x', function(d) { return (d.class.indexOf('node')!=-1?NODE_WIDTH:LEAF_NODE_WIDTH); })
		.attr('y',function(d) { return 5+(d.class.indexOf('node')!=-1?NODE_HEIGHT:LEAF_NODE_HEIGHT); })
		.attr('text-anchor', 'middle')
		.text(function(d) { return d.label; });

	force
		.nodes( data.nodes )
		.links( data.links );

	force.start();
};
