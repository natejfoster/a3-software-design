$(function() {
  d3.json('data.json', function(error, data) {
    var graph = Graph('#vis', 500, 500);
    graph.height(450).data(data.nodes, data.links);
    graph
      .addNodes()
      .addLinks()
      .nodeRadius(5)
      .nodeFill()
      .drag();
    console.log(data);
    graph.start();
  });
})
