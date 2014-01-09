function Contact( data ){
  this.img  = ko.observable(data.img);
  this.text = ko.observable(data.text);
  this.url  = ko.observable(data.url);
}

function Item( data ){
  this.itemName   = ko.observable(data.itemName);
  this.itemDetail = ko.observable(data.itemDetail);
}


function BodySection( data ){
  var mappedItems = data.items.map(function(item){ return new Item(item); });
  this.title    = ko.observable(data.title);
  this.subTitle = ko.observable(data.subTitle);
  this.body     = ko.observable(data.body);
  this.items    = ko.observableArray(mappedItems);
}


function WorkHistoryForceDirectedGraph( data ){
	//Shamelessly stolen from http://bl.ocks.org/couchand/6420534
	const PROJECT_NODE_SIZE = 25,
	SKILL_NODE_RATIO = 0.2,
	VISIBILITY_LIMIT_PX = 20;
	
	var node, link, text,
	width = window.innerWidth * 0.75,
	height = window.innerHeight * 0.66,
	svg = d3.select('#viz')
		.append('svg')
		.attr('width', width)
		.attr('height', height),
	voronoi = d3.geom.voronoi()
		.x(function (d){ return d.x; })
		.y(function (d){ return d.y; })
		.clipExtent([[-10, -10], [width+10, height+10]]),
	force = d3.layout.force()
		.charge(-1000)
		.friction(0.3)
		.linkDistance(50)
		.size([width, height]);
	
	function recenterVoronoi(nodes){
		var shapes = [];
		
		voronoi(nodes).forEach(function(d){
			var n = [];
			if(!d.length){
				return;
			}
			d.forEach(function(c){
				n.push(c[0] - d.point.x, c[1] - d.point.y);
			});
			n.point = d.point;
			shapes.push(n);
		});
		
		return shapes;
	}
	
	function draw(){
		var clip;
		
		node.attr('transform', function(d){ return 'translate(' + d.x + ',' + d.y + ')'; })
				.attr('clip-path', function(d){ return 'url(#clip-' + d.index + ')'; });
		link.attr('x1', function(d){ return d.source.x; })
				.attr('y1', function(d){ return d.source.y; })
				.attr('x2', function(d){ return d.target.x; })
				.attr('y2', function(d){ return d.target.y; });
		
		clip = svg.selectAll('.clip')
				.data( recenterVoronoi(node.data()), function(d){ return d.point.index; })
				.enter()
				.append('clipPath')
				.attr('id', function(d){ return 'clip-' + d.point.index; })
				.attr('class', 'clip')
				.remove();
		clip.selectAll('path')
				.remove();
		clip.append('path')
				.attr('d', function(d){ return 'M' + d.join(',') + 'z'; });
	}
	
	force.on('tick', draw);
	
	data.nodes.forEach(function(d, i) {
		d.id = i;
	});
	
	link = svg.selectAll('.link')
		.data( data.links )
		.enter().append('line')
		.attr('class', 'link')
		.style('stroke-width', function(d){ return Math.sqrt(d.value); });

	node = svg.selectAll('.node')
		.data( data.nodes )
		.enter().append('g')
		.attr('title', name)
		.attr('class', 'node')
		.call( force.drag );

	node.append('circle')
		.attr('r', 30)
		.attr('stroke', '#000')
		.attr('fill', '#ccc' )
		.attr('fill-opacity', 0.5);
	
	node.append('svg:text')
		.attr('class', 'label')
		.attr('x', function(d) { return d.x; })
		.attr('y', function(d) { return d.y; })
		.attr('dy', '.35em')
		.attr('text-anchor', 'middle')
		.style('opacity', 0.5)
		.text(function(d) { return d.label; });

	force
		.nodes( data.nodes )
		.links( data.links )
		.start();
};


function PortfolioViewModel(){
  // Data
  var self = this;
  self.title        = ko.observable();
  self.subTitle     = ko.observable();
  self.contact      = ko.observableArray([]);
  self.bodySections = ko.observableArray([]);
  
  // Load initial state from server
  $.getJSON( "/api/portfolio", function( data ){
    var mappedContacts = data.contact.map(function(item){ return new Contact(item); }),
    mappedSections = data.bodySections.map(function(item){ return new BodySection(item); });
		
		WorkHistoryForceDirectedGraph(data.workHistory);
    
    self.title(data.header);
    self.subTitle(data.subHeader);
    self.contact(mappedContacts);
    self.bodySections(mappedSections);
  });
}

ko.applyBindings(new PortfolioViewModel());


