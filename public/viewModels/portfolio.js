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
	const NODE_WIDTH = 40,
	NODE_HEIGHT = 12,
	LEAF_NODE_WIDTH = 10
	LEAF_NODE_HEIGHT = 5;
	
	var container = document.getElementById('viz'),
	node, link, text,
	dragging = false,
	width = container.offsetWidth,
	height = container.offsetHeight,
	svg = d3.select('#viz')
		.append('svg')
		.attr('width', '100%')
		.attr('height', '100%'),
	tips = d3.select('#tips')
	force = d3.layout.force()
		.charge(function(d){ return (d.class=='node'?-1000:-100); })
		.linkDistance(function(d){ return (d.class=='nodelink'?80:45); })
		.linkStrength(1)
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
		d.links.forEach(function(e, j) {
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
		})
		.on('mousedown', function(){ d3.event.preventDefault(); })
		.on('mouseup', function(d) {
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
		});
	
	node.call(force.drag);
	
	node.append('rect')
		.attr('class', function(d) { return d.class; })
		.attr('width', function(d) { return 2*(d.class=='node'?NODE_WIDTH:LEAF_NODE_WIDTH); })
		.attr('height', function(d) { return 2*(d.class=='node'?NODE_HEIGHT:LEAF_NODE_HEIGHT); })
		.attr('rx', function(d) { return (d.class=='node'?0:LEAF_NODE_WIDTH*2); })
		.attr('ry', function(d) { return (d.class=='node'?NODE_HEIGHT:LEAF_NODE_HEIGHT*2); });
	
	node.append('svg:text')
		.attr('class', 'label')
		.attr('x', function(d) { return (d.class=='node'?NODE_WIDTH:LEAF_NODE_WIDTH); })
		.attr('y',function(d) { return 5+(d.class=='node'?NODE_HEIGHT:LEAF_NODE_HEIGHT); })
		.attr('text-anchor', 'middle')
		.text(function(d) { return d.label; });

	force
		.nodes( data.nodes )
		.links( data.links );
	
	force.start();
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


