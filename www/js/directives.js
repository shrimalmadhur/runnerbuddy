;angular.module('starter.directives', [])

.directive('map', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {
      function initialize() {
        var pathToDraw = [new google.maps.LatLng(37.7598507,-122.38361090000001),new google.maps.LatLng(37.7638507,-122.38761090000001),new google.maps.LatLng(37.7658507,-122.39161090000001),new google.maps.LatLng(37.7668507,-122.39161090000001)];
        var myLatlng = new google.maps.LatLng(37.7598507,-122.38361090000001);
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.HYBRID
        };
        var map = new google.maps.Map($element[0], mapOptions);

        $scope.onCreate({map: map});

          var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Uluru (Ayers Rock)'
          });

        //  google.maps.event.addListener(marker, 'click', function() {
        //    infowindow.open(map,marker);
        //  });

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false;
        });

        //line to be drawn from pathToDraw (line 11)
        var runPath = new google.maps.Polyline({
          path: pathToDraw,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        runPath.setMap(map);
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }
});
