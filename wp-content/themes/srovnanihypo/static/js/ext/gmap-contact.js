var map; // finally, map is global var;)
var mapArray = [];
var zoom = 12;

function new_map($el) {

	var $markers = $el.find('.marker');

	var args = {
		zoom: zoom,
		center: new google.maps.LatLng(0, 0),
		draggable: true,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		panControl: false,
		zoomControl: true,
		scaleControl: false,
		mapTypeControl: false,
		streetViewControl: false,
		overviewMapControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map($el[0], args);

	map.markers = [];

	var styles = [
	  {
	    "featureType":"all",
	    "elementType":"labels.text.fill",
	    "stylers":[
	      {
	        "saturation":"0"
	      },
	      {
	        "lightness":"0"
	      },
	      {
	        "visibility":"on"
	      },
	      {
	        "color":"#495eaa"
	      }
	    ]
	  },
	  {
	    "featureType":"all",
	    "elementType":"labels.text.stroke",
	    "stylers":[
	      {
	        "visibility":"on"
	      },
	      {
	        "color":"#162869"
	      },
	      {
	        "lightness":"0"
	      }
	    ]
	  },
	  {
	    "featureType":"all",
	    "elementType":"labels.icon",
	    "stylers":[
	      {
	        "visibility":"off"
	      }
	    ]
	  },
	  {
	    "featureType":"administrative",
	    "elementType":"geometry.fill",
	    "stylers":[
	      {
	        "color":"#2d65ba"
	      },
	      {
	        "lightness":20
	      }
	    ]
	  },
	  {
	    "featureType":"administrative",
	    "elementType":"geometry.stroke",
	    "stylers":[
	      {
	        "color":"#3260a5"
	      },
	      {
	        "lightness":17
	      },
	      {
	        "weight":1.2
	      }
	    ]
	  },
	  {
	    "featureType":"landscape",
	    "elementType":"geometry",
	    "stylers":[
	      {
	        "color":"#002858"
	      },
	      {
	        "lightness":"0"
	      }
	    ]
	  },
	  {
	    "featureType":"poi",
	    "elementType":"geometry",
	    "stylers":[
	      {
	        "color":"#162869"
	      },
	      {
	        "lightness":"0"
	      }
	    ]
	  },
	  {
	    "featureType":"poi.park",
	    "elementType":"geometry",
	    "stylers":[
	      {
	        "color":"#162869"
	      },
	      {
	        "lightness":"0"
	      }
	    ]
	  },
	  {
	    "featureType":"road",
	    "elementType":"all",
	    "stylers":[
	      {
	        "visibility":"off"
	      },
	      {
	        "color":"#ff0000"
	      }
	    ]
	  },
	  {
	    "featureType":"road",
	    "elementType":"geometry",
	    "stylers":[
	      {
	        "visibility":"on"
	      },
	      {
	        "hue":"#1700ff"
	      }
	    ]
	  },
	  {
	    "featureType":"road",
	    "elementType":"geometry.fill",
	    "stylers":[
	      {
	        "visibility":"on"
	      },
	      {
	        "color":"#2b2189"
	      }
	    ]
	  },
	  {
	    "featureType":"road",
	    "elementType":"geometry.stroke",
	    "stylers":[
	      {
	        "color":"#3c21ca"
	      }
	    ]
	  },
	  {
	    "featureType":"road.highway",
	    "elementType":"geometry.fill",
	    "stylers":[
	      {
	        "color":"#2c3d7a"
	      },
	      {
	        "lightness":"0"
	      }
	    ]
	  },
	  {
	    "featureType":"road.highway",
	    "elementType":"geometry.stroke",
	    "stylers":[
	      {
	        "color":"#162869"
	      },
	      {
	        "lightness":"0"
	      },
	      {
	        "weight":0.2
	      }
	    ]
	  },
	  {
	    "featureType":"road.arterial",
	    "elementType":"geometry",
	    "stylers":[
	      {
	        "color":"#23377f"
	      },
	      {
	        "lightness":"0"
	      }
	    ]
	  },
	  {
	    "featureType":"road.local",
	    "elementType":"geometry",
	    "stylers":[
	      {
	        "color":"#283b7c"
	      },
	      {
	        "lightness":"0"
	      }
	    ]
	  },
	  {
	    "featureType":"transit",
	    "elementType":"geometry",
	    "stylers":[
	      {
	        "color":"#162869"
	      },
	      {
	        "lightness":"0"
	      }
	    ]
	  },
	  {
	    "featureType":"water",
	    "elementType":"geometry",
	    "stylers":[
	      {
	        "color":"#0f1f57"
	      },
	      {
	        "lightness":"0"
	      }
	    ]
	  }
	];

	var styledMapOptions = {
		map: map
	}

	var mainmap = new google.maps.StyledMapType(styles,styledMapOptions);

	map.mapTypes.set('site_map', mainmap);
	map.setMapTypeId('site_map');

	$markers.each(function() {
		add_marker(jQuery(this), map);
	});

	jQuery(window).on('load resize', function() {
		center_map(map);
	});

	return map;
}

function add_marker($marker, map) {
	var latlng = new google.maps.LatLng($marker.attr('data-lat'), $marker.attr('data-lng'));
	var imgUrl = $marker.attr('data-img');
	var imgWidth = $marker.attr('data-width');
	var imgHeight = $marker.attr('data-height');

	var image = new google.maps.MarkerImage(
		imgUrl,
		new google.maps.Size(imgWidth,imgHeight),
		new google.maps.Point(0,0),
		new google.maps.Point(imgWidth/2,imgHeight)
	);

	var marker = new google.maps.Marker({
		position: latlng,
		map: map,
		icon: image
	});

	map.markers.push(marker);

	if ($marker.html()) {
		var infowindow = new google.maps.InfoWindow({
			content: $marker.html(),
			//pixelOffset: new google.maps.Size(260,200)
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
		});
	}

	//infowindow.open(map, marker);
}

function center_map(map) {
	var bounds = new google.maps.LatLngBounds();
	var offsetY = 0;

	// Pokud je marker mimo osu
	if (jQuery(window).width() < 767) {
		//offsetY = -0.0025;
		offsetY = 0;
	} else {
		//offsetY = -0.0025;
		offsetY = 0;
	}

	jQuery.each( map.markers, function(i, marker){
		var latlng = new google.maps.LatLng(marker.position.lat() - offsetY, marker.position.lng());
		bounds.extend(latlng);
	});

	if (map.markers.length == 1) {
		map.setCenter(bounds.getCenter());
		map.setZoom(zoom);
	} else {
		map.fitBounds(bounds);
		//map.setZoom(zoom);
	}
}

/*
jQuery(document).ready(function($) {
	$('.gmap').each(function() {
		map = new_map($(this));
		mapArray.push(map);
	});
});
*/

// funkci vola parametr ?callback=initMap ve <script> volani knihovny google mapy
// <script type="text/javascript" src="https://maps.google.com/maps/api/js?key=API_KEY&callback=initMap" async defer></script>
function initMap() {
  jQuery('.gmap').each(function() {
		map = new_map(jQuery(this));
		mapArray.push(map);
	});
}