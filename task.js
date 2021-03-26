var duomo = {
  Image: {
    xmlns: "http://schemas.microsoft.com/deepzoom/2008",
    Url: "http://openseadragon.github.io/example-images/duomo/duomo_files/",
    Format: "jpg",
    Overlap: "2",
    TileSize: "256",
    Size: {
      Width:  "13920",
      Height: "10200"
    }
  }
};

var highsmith = {
  Image: {
    xmlns: "http://schemas.microsoft.com/deepzoom/2008",
    Url: "http://openseadragon.github.io/example-images/highsmith/highsmith_files/",
    Format: "jpg",
    Overlap: "2",
    TileSize: "256",
    Size: {
      Width:  "13920",
      Height: "10200"
    }
  }
};

var viewer1 = OpenSeadragon({
  id: "viewer1",
  prefixUrl: "http://openseadragon.github.io/openseadragon/images/",
  tileSources: duomo
});

var viewer2 = OpenSeadragon({
  id: "viewer2",
  prefixUrl: "http://openseadragon.github.io/openseadragon/images/",
  tileSources: highsmith
});

$(document).ready(function(){
  
  $('#flexCheckChecked').on('click',function(){


var viewer1Leading = false;
var viewer2Leading = false;

var viewer1Handler = function() {
  if (viewer2Leading) {
    return;
  }

  viewer1Leading = true;
  viewer2.viewport.zoomTo(viewer1.viewport.getZoom());
  viewer2.viewport.panTo(viewer1.viewport.getCenter());
  viewer1Leading = false;
};

var viewer2Handler = function() {
  if (viewer1Leading) {
    return;
  }

  viewer2Leading = true;
  viewer1.viewport.zoomTo(viewer2.viewport.getZoom());
  viewer1.viewport.panTo(viewer2.viewport.getCenter());
  viewer2Leading = false;
};

viewer1.addHandler('zoom', viewer1Handler);
viewer2.addHandler('zoom', viewer2Handler);
viewer1.addHandler('pan', viewer1Handler);
viewer2.addHandler('pan', viewer2Handler);

    
});
});
