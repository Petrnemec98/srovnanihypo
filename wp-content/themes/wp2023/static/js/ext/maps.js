function refreshMaps() {
	var pamatkyMaps = [];

	function initSmaps() {
		jQuery('.smap').each(function() {
			var wrapper = jQuery(this);
			if (wrapper.is(':visible')) {
				initSmap(wrapper.attr('id'));
			}
		});
	}

	function initSmap(id) {
		if (id in pamatkyMaps) return;

		var el = jQuery('#' + id);
		if (!el.length) return;

		var lat = parseFloat(el.attr('data-lat'));
		if (!lat) lat = 49.8285742;
		var lng = parseFloat(el.attr('data-lng'));
		if (!lng) lng = 15.4804057;
		var zoom = parseInt(el.attr('data-zoom'));
		if (!zoom) zoom = 17;

		// coords + zoom
		var center = SMap.Coords.fromWGS84(lng, lat);
		pamatkyMaps[id] = new SMap(JAK.gel(id), center, zoom);

		// config
		pamatkyMaps[id].addDefaultLayer(SMap.DEF_TURIST).enable();
		pamatkyMaps[id].addDefaultLayer(SMap.DEF_TRAIL).enable();
		pamatkyMaps[id].addDefaultControls();

		var isMobile = {
			Android: function() { return navigator.userAgent.match(/Android/i); },
			BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
			iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
			Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
			Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
			any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
		};

		if (isMobile.any()) {
		 	// vypnutí zoomu kolečkem myši
		 	var all = pamatkyMaps[id].getControls();
			for (var i = 0; i < all.length; i++) {
				var control = all[i];
				if (control instanceof SMap.Control.Mouse) {
					control.configure(SMap.MOUSE_PAN + SMap.MOUSE_ZOOM);
					//control.configure(SMap.MOUSE_ZOOM);
				}
			}
		}
		else {
			// povolení pouze funkce PAN pro desktop
			var all = pamatkyMaps[id].getControls();
			for (var i = 0; i < all.length; i++) {
				var control = all[i];
				if (control instanceof SMap.Control.Mouse) {
					//control.configure(SMap.MOUSE_PAN + SMap.MOUSE_ZOOM);
					control.configure(SMap.MOUSE_PAN + SMap.MOUSE_ZOOM);
				}
			}
		}

		// responsivita
		var sync = new SMap.Control.Sync({bottomSpace:0});
		pamatkyMaps[id].addControl(sync);

		// markers layer
		var markersLayer = new SMap.Layer.Marker();
		pamatkyMaps[id].addLayer(markersLayer);
		markersLayer.enable();

		var marker = new SMap.Marker(pamatkyMaps[id].getCenter(), null, {
			url: '/wp-content/themes/wp/static/images/marker.svg'
		});

		// center marker
		if (el.attr('data-center-marker')) {
			var centerMarker = new SMap.Marker(center, 'centerMarker', {});
			var title = el.attr('data-title');
			var url = el.attr('data-url');
			if (title) {
				var card = new SMap.Card();
				var html = '';
				html += '<p class="title">' + title + '</p>';

				card.getHeader().innerHTML = html;
				centerMarker.decorate(SMap.Marker.Feature.Card, card);
			}
			markersLayer.addMarker(centerMarker);
		}

		// multiple markers
		if (el.attr('data-markers')) {
			var coords = [];
			var markers = JSON.parse(el.attr('data-markers'));

			if (markers) {
				for (var i in markers) if (markers.hasOwnProperty(i)) {
					var position = SMap.Coords.fromWGS84(markers[i].longitude, markers[i].latitude);
					coords.push(position);

					var marker = new SMap.Marker(position, 'marker' + i, {
				    url: '/static/images/' + markers[i].img,
				    title: markers[i].title,
				    anchor: {
				    	left: 30,
				    	bottom: 0
				    }
					});

					var description = markers[i].description;
					var shortDescription = $.trim(description).substring(0, 70).split(" ").slice(0, -1).join(" ") + "...";

					var icons = '';
					var j;

					if (markers[i].icons) {
						for (j = 0; j < markers[i].icons.length; j++) {
							var iconClass = markers[i].icons[j].id;
							var iconTitle = markers[i].icons[j].title;
							icons += '<li><svg class="icon '+ iconClass +'"><use xlink:href="/static/svg/svg-sprite.svg#'+ iconClass +'"></use></svg></li>';
						}
					}

					if (markers[i].title) {
						var width = 312;
						var card = new SMap.Card(width, {
							anchor: {
								left: 0,
								top: -75
							}
						});
						var html = '';

						html += '<div class="clearfix" id="'+ markers[i].id +'">';
							html += '<div class="img"><a href="'+ markers[i].url +'"><img src="' + markers[i].previewImage + '" alt="' + markers[i].title + '"></a></div>';
							html += '<div class="text">';
								html += '<p class="title"><a href="'+ markers[i].url +'">' + markers[i].title + '</a></p>';
								html += '<div class="desc">' + shortDescription + '</div>';
								if (markers[i].openingText && markers[i].openingStatus) {
									html += '<div class="opening-info"><div class="txt"><div class="status '+ markers[i].openingStatus +'"></div>'+ markers[i].openingText +'</div></div>';
								}
								html += '<div class="cat-list">';
									html += '<ul>' + icons + '</ul>';
								html += '</div>';
							html += '</div>';
						html += '</div>';

						card.getHeader().innerHTML = html;
						marker.decorate(SMap.Marker.Feature.Card, card);
					}
					markersLayer.addMarker(marker);
				}
			}

			var centerAndZoom = pamatkyMaps[id].computeCenterZoom(coords);

			if (centerAndZoom) {
				pamatkyMaps[id].setCenterZoom(centerAndZoom[0], centerAndZoom[1]);
			}
		} else {
			markersLayer.addMarker(marker);
		}

		if (el.attr('data-gpx-input')) {
			var gpxInputId = el.attr('data-gpx-input');
			var value = JAK.gel(gpxInputId).value.trim();
			var xmlDoc = JAK.XML.createDocument(value);

			var gpx = new SMap.Layer.GPX(xmlDoc, null, {maxPoints:500, colors: ['#d00']});
			pamatkyMaps[id].addLayer(gpx);
			gpx.enable();
			gpx.fit();
		}
	}

	initSmaps();
}

refreshMaps();

// Reinit on ajax form filtering
/*
jQuery(window).on('filtering',function() {
	refreshMaps();
});
*/