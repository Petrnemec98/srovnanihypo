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

	/*var jihomoravskyKrajCoords = [
    { lng: 17.6453761, lat: 48.854195 },
		{ lng: 17.6447563, lat: 48.8579542 },
		{ lng: 17.6413231, lat: 48.8628104 },
		{ lng: 17.6372032, lat: 48.8672145 },
		{ lng: 17.635315, lat: 48.871731 },
		{ lng: 17.6365166, lat: 48.8743279 },
		{ lng: 17.6370316, lat: 48.8781665 },
		{ lng: 17.6351433, lat: 48.8763601 },
		{ lng: 17.6308518, lat: 48.8765859 },
		{ lng: 17.6272469, lat: 48.8782794 },
		{ lng: 17.6263886, lat: 48.8813275 },
		{ lng: 17.6133423, lat: 48.8971293 },
		{ lng: 17.6031412, lat: 48.9101749 },
		{ lng: 17.5883783, lat: 48.908821 },
		{ lng: 17.5677789, lat: 48.9207792 },
		{ lng: 17.5574793, lat: 48.9216816 },
		{ lng: 17.5482095, lat: 48.9173951 },
		{ lng: 17.5396265, lat: 48.9223583 },
		{ lng: 17.5533594, lat: 48.9433339 },
		{ lng: 17.5224603, lat: 48.9559601 },
		{ lng: 17.5121607, lat: 48.9521275 },
		{ lng: 17.4984277, lat: 48.9658784 },
		{ lng: 17.4936212, lat: 48.9600178 },
		{ lng: 17.4822916, lat: 48.9573127 },
		{ lng: 17.4644388, lat: 48.9620465 },
		{ lng: 17.4579157, lat: 48.9600178 },
		{ lng: 17.4345697, lat: 48.9507747 },
		{ lng: 17.3981775, lat: 48.9807522 },
		{ lng: 17.3906244, lat: 48.9798509 },
		{ lng: 17.3731149, lat: 48.9760201 },
		{ lng: 17.3538889, lat: 48.9762455 },
		{ lng: 17.3545755, lat: 48.9850332 },
		{ lng: 17.3597254, lat: 48.9958468 },
		{ lng: 17.3567902, lat: 49.0069757 },
		{ lng: 17.3320709, lat: 49.0150825 },
		{ lng: 17.2867523, lat: 49.0195858 },
		{ lng: 17.2634064, lat: 49.0321927 },
		{ lng: 17.2483002, lat: 49.0393952 },
		{ lng: 17.2263275, lat: 49.0321927 },
		{ lng: 17.2180878, lat: 49.0393952 },
		{ lng: 17.233194, lat: 49.0573968 },
		{ lng: 17.2235809, lat: 49.0735928 },
		{ lng: 17.2043549, lat: 49.0906828 },
		{ lng: 17.1521698, lat: 49.0744924 },
		{ lng: 17.1178375, lat: 49.0798898 },
		{ lng: 17.1178375, lat: 49.1023725 },
		{ lng: 17.1356903, lat: 49.1023725 },
		{ lng: 17.1535431, lat: 49.1338313 },
		{ lng: 17.1947418, lat: 49.1410191 },
		{ lng: 17.2043549, lat: 49.1787378 },
		{ lng: 17.1947418, lat: 49.1823285 },
		{ lng: 17.1713959, lat: 49.1769423 },
		{ lng: 17.1521698, lat: 49.1769423 },
		{ lng: 17.1631561, lat: 49.1886117 },
		{ lng: 17.1439301, lat: 49.2047649 },
		{ lng: 17.1439301, lat: 49.227191 },
		{ lng: 17.1315704, lat: 49.2469177 },
		{ lng: 17.1480499, lat: 49.2630517 },
		{ lng: 17.1617828, lat: 49.2747009 },
		{ lng: 17.1453034, lat: 49.3105271 },
		{ lng: 17.1315704, lat: 49.3302204 },
		{ lng: 17.0944916, lat: 49.3364848 },
		{ lng: 17.0477997, lat: 49.3561677 },
		{ lng: 17.0642792, lat: 49.4017661 },
		{ lng: 17.0464264, lat: 49.404447 },
		{ lng: 17.0464264, lat: 49.3874653 },
		{ lng: 17.0217072, lat: 49.3919347 },
		{ lng: 16.9983612, lat: 49.4169561 },
		{ lng: 16.9887482, lat: 49.4455364 },
		{ lng: 16.9489227, lat: 49.4848071 },
		{ lng: 16.9228302, lat: 49.4955118 },
		{ lng: 16.8706451, lat: 49.4856992 },
		{ lng: 16.8692719, lat: 49.4741 },
		{ lng: 16.9118439, lat: 49.4312483 },
		{ lng: 16.8775116, lat: 49.399085 },
		{ lng: 16.8472992, lat: 49.3874653 },
		{ lng: 16.7978607, lat: 49.4160627 },
		{ lng: 16.82258, lat: 49.4339276 },
		{ lng: 16.8143402, lat: 49.4428577 },
		{ lng: 16.799234, lat: 49.4607129 },
		{ lng: 16.7841278, lat: 49.5017551 },
		{ lng: 16.8019806, lat: 49.5124562 },
		{ lng: 16.8184601, lat: 49.5285033 },
		{ lng: 16.7319428, lat: 49.553455 },
		{ lng: 16.7497955, lat: 49.559691 },
		{ lng: 16.7484222, lat: 49.5810653 },
		{ lng: 16.8006073, lat: 49.5730511 },
		{ lng: 16.8006073, lat: 49.5819557 },
		{ lng: 16.799234, lat: 49.59709 },
		{ lng: 16.7388092, lat: 49.6077701 },
		{ lng: 16.6289459, lat: 49.6255652 },
		{ lng: 16.5547882, lat: 49.6291234 },
		{ lng: 16.5328156, lat: 49.5926392 },
		{ lng: 16.4270721, lat: 49.5908588 },
		{ lng: 16.4064728, lat: 49.5757226 },
		{ lng: 16.3941132, lat: 49.5668168 },
		{ lng: 16.379007, lat: 49.5507823 },
		{ lng: 16.3996063, lat: 49.5400896 },
		{ lng: 16.4147125, lat: 49.5222634 },
		{ lng: 16.3954865, lat: 49.4999714 },
		{ lng: 16.3789092, lat: 49.4791825 },
		{ lng: 16.3914404, lat: 49.4693666 },
		{ lng: 16.3741026, lat: 49.4641233 },
		{ lng: 16.382514, lat: 49.4564246 },
		{ lng: 16.3696394, lat: 49.448055 },
		{ lng: 16.3634596, lat: 49.4540812 },
		{ lng: 16.3548766, lat: 49.447497 },
		{ lng: 16.3485251, lat: 49.4594372 },
		{ lng: 16.3497267, lat: 49.4683626 },
		{ lng: 16.3306723, lat: 49.4694782 },
		{ lng: 16.3171111, lat: 49.4649042 },
		{ lng: 16.3140212, lat: 49.456313 },
		{ lng: 16.2934218, lat: 49.4503986 },
		{ lng: 16.2937651, lat: 49.4477202 },
		{ lng: 16.3265524, lat: 49.4501754 },
		{ lng: 16.3354788, lat: 49.4399073 },
		{ lng: 16.3203726, lat: 49.4305301 },
		{ lng: 16.2863837, lat: 49.4312 },
		{ lng: 16.2633811, lat: 49.4260642 },
		{ lng: 16.2530814, lat: 49.4064093 },
		{ lng: 16.2287055, lat: 49.3943444 },
		{ lng: 16.2372885, lat: 49.3825 },
		{ lng: 16.2287055, lat: 49.3661814 },
		{ lng: 16.2184058, lat: 49.3511993 },
		{ lng: 16.2307654, lat: 49.3491865 },
		{ lng: 16.2534247, lat: 49.3384498 },
		{ lng: 16.2733374, lat: 49.3355415 },
		{ lng: 16.2723074, lat: 49.3310669 },
		{ lng: 16.2455283, lat: 49.3324093 },
		{ lng: 16.2424384, lat: 49.3245781 },
		{ lng: 16.2723074, lat: 49.3151789 },
		{ lng: 16.2898169, lat: 49.3214452 },
		{ lng: 16.2915335, lat: 49.3160741 },
		{ lng: 16.287757, lat: 49.3053302 },
		{ lng: 16.2596045, lat: 49.2925688 },
		{ lng: 16.2565146, lat: 49.2771163 },
		{ lng: 16.285697, lat: 49.2650197 },
		{ lng: 16.2870703, lat: 49.2576258 },
		{ lng: 16.253768, lat: 49.2531442 },
		{ lng: 16.2479315, lat: 49.2437314 },
		{ lng: 16.2345419, lat: 49.2134638 },
		{ lng: 16.2712775, lat: 49.2020245 },
		{ lng: 16.2637244, lat: 49.1964161 },
		{ lng: 16.2695609, lat: 49.1789136 },
		{ lng: 16.2245856, lat: 49.1697112 },
		{ lng: 16.2458716, lat: 49.1454623 },
		{ lng: 16.2036429, lat: 49.134232 },
		{ lng: 16.2585745, lat: 49.1074935 },
		{ lng: 16.2235556, lat: 49.0953553 },
		{ lng: 16.2105093, lat: 49.0728694 },
		{ lng: 16.1322318, lat: 49.0629724 },
		{ lng: 16.1480246, lat: 49.0476731 },
		{ lng: 16.093093, lat: 49.0346199 },
		{ lng: 16.0361014, lat: 49.0436225 },
		{ lng: 15.9818564, lat: 49.0305683 },
		{ lng: 15.9578238, lat: 49.0670214 },
		{ lng: 15.9276114, lat: 49.0346199 },
		{ lng: 15.8898459, lat: 49.0382211 },
		{ lng: 15.8472739, lat: 49.0139079 },
		{ lng: 15.8170615, lat: 49.0089538 },
		{ lng: 15.8040152, lat: 48.9940884 },
		{ lng: 15.7600699, lat: 48.9787679 },
		{ lng: 15.7332907, lat: 48.9494656 },
		{ lng: 15.7126914, lat: 48.9652459 },
		{ lng: 15.6653128, lat: 48.9665983 },
		{ lng: 15.64952, lat: 48.939093 },
		{ lng: 15.6268607, lat: 48.9422501 },
		{ lng: 15.6110678, lat: 48.9580327 },
		{ lng: 15.5911551, lat: 48.9548766 },
		{ lng: 15.550643, lat: 48.9178901 },
		{ lng: 15.5403433, lat: 48.9070596 },
		{ lng: 15.5746756, lat: 48.8939696 },
		{ lng: 15.6138144, lat: 48.8953239 },
		{ lng: 15.6296072, lat: 48.889455 },
		{ lng: 15.6433402, lat: 48.8871975 },
		{ lng: 15.6879721, lat: 48.8560344 },
		{ lng: 15.7044516, lat: 48.8619072 },
		{ lng: 15.713378, lat: 48.8578415 },
		{ lng: 15.7552634, lat: 48.8497091 },
		{ lng: 15.7786093, lat: 48.8741023 },
		{ lng: 15.8301077, lat: 48.8704893 },
		{ lng: 15.8417807, lat: 48.876812 },
		{ lng: 15.8459006, lat: 48.8677793 },
		{ lng: 15.8424674, lat: 48.8573897 },
		{ lng: 15.8774863, lat: 48.8578415 },
		{ lng: 15.8836661, lat: 48.8447386 },
		{ lng: 15.8960257, lat: 48.8497091 },
		{ lng: 15.9049521, lat: 48.8438348 },
		{ lng: 15.8946524, lat: 48.8361521 },
		{ lng: 15.909072, lat: 48.8375079 },
		{ lng: 15.9289847, lat: 48.8302763 },
		{ lng: 15.9269248, lat: 48.8248518 },
		{ lng: 15.9351645, lat: 48.820331 },
		{ lng: 15.9434042, lat: 48.8293722 },
		{ lng: 15.9571372, lat: 48.8221394 },
		{ lng: 15.9509573, lat: 48.8072183 },
		{ lng: 15.9591971, lat: 48.7995299 },
		{ lng: 15.9873496, lat: 48.7850546 },
		{ lng: 16.015502, lat: 48.7728377 },
		{ lng: 16.0894479, lat: 48.7479565 },
		{ lng: 16.1409463, lat: 48.7434287 },
		{ lng: 16.1539926, lat: 48.7475037 },
		{ lng: 16.2617959, lat: 48.7370892 },
		{ lng: 16.2700357, lat: 48.7407119 },
		{ lng: 16.3311471, lat: 48.7312017 },
		{ lng: 16.3380136, lat: 48.7461454 },
		{ lng: 16.3544931, lat: 48.7411647 },
		{ lng: 16.3517465, lat: 48.7352777 },
		{ lng: 16.3627328, lat: 48.7271254 },
		{ lng: 16.408738, lat: 48.7425231 },
		{ lng: 16.4368905, lat: 48.7660634 },
		{ lng: 16.4362039, lat: 48.7782819 },
		{ lng: 16.4622964, lat: 48.8076846 },
		{ lng: 16.5151681, lat: 48.7963779 },
		{ lng: 16.5392007, lat: 48.8135631 },
		{ lng: 16.5673532, lat: 48.7936639 },
		{ lng: 16.5934457, lat: 48.7809967 },
		{ lng: 16.6483773, lat: 48.7846163 },
		{ lng: 16.6737832, lat: 48.7723993 },
		{ lng: 16.6806497, lat: 48.7538419 },
		{ lng: 16.6724099, lat: 48.7443343 },
		{ lng: 16.6813363, lat: 48.7275783 },
		{ lng: 16.7184152, lat: 48.7379949 },
		{ lng: 16.7472543, lat: 48.7307488 },
		{ lng: 16.7520608, lat: 48.7198778 },
		{ lng: 16.8042459, lat: 48.7099106 },
		{ lng: 16.9003762, lat: 48.7180657 },
		{ lng: 16.9154824, lat: 48.7026605 },
		{ lng: 16.9093026, lat: 48.6804506 },
		{ lng: 16.9216622, lat: 48.6731963 },
		{ lng: 16.9147958, lat: 48.6532415 },
		{ lng: 16.9278421, lat: 48.6432611 },
		{ lng: 16.9175424, lat: 48.6237484 },
		{ lng: 16.9429483, lat: 48.6187555 },
		{ lng: 16.9532479, lat: 48.6223867 },
		{ lng: 16.9676675, lat: 48.6409926 },
		{ lng: 16.9669808, lat: 48.6691153 },
		{ lng: 16.9992532, lat: 48.6913302 },
		{ lng: 16.9965066, lat: 48.7099106 },
		{ lng: 17.0116128, lat: 48.7189718 },
		{ lng: 17.0431985, lat: 48.7651582 },
		{ lng: 17.0898904, lat: 48.7891403 },
		{ lng: 17.0898904, lat: 48.7954733 },
		{ lng: 17.1063699, lat: 48.8040668 },
		{ lng: 17.1043099, lat: 48.825318 },
		{ lng: 17.1516885, lat: 48.8443008 },
		{ lng: 17.2004403, lat: 48.8786324 },
		{ lng: 17.2471322, lat: 48.8637282 },
		{ lng: 17.2794046, lat: 48.8565003 },
		{ lng: 17.3061837, lat: 48.8452046 },
		{ lng: 17.3206033, lat: 48.8452046 },
		{ lng: 17.3590554, lat: 48.8140153 },
		{ lng: 17.3769082, lat: 48.8180845 },
		{ lng: 17.3961343, lat: 48.8131109 },
		{ lng: 17.4167337, lat: 48.8280302 },
		{ lng: 17.4242868, lat: 48.825318 },
		{ lng: 17.4352731, lat: 48.8393298 },
		{ lng: 17.4421395, lat: 48.8366181 },
		{ lng: 17.4462594, lat: 48.8465602 },
		{ lng: 17.4778451, lat: 48.8429451 },
		{ lng: 17.5217904, lat: 48.81085 },
		{ lng: 17.5375833, lat: 48.8180845 },
		{ lng: 17.5465097, lat: 48.8158239 },
		{ lng: 17.555436, lat: 48.8221535 },
		{ lng: 17.5485696, lat: 48.8248659 },
		{ lng: 17.5513162, lat: 48.8320984 },
		{ lng: 17.5705422, lat: 48.8230576 },
		{ lng: 17.5959376, lat: 48.8270798 },
		{ lng: 17.5969676, lat: 48.834312 },
		{ lng: 17.6014308, lat: 48.8404133 },
		{ lng: 17.6206568, lat: 48.8410912 },
		{ lng: 17.6199702, lat: 48.8465139 },
		{ lng: 17.6337031, lat: 48.8550986 },
		{ lng: 17.6453761, lat: 48.854195 }
	];

	var prazskyKrajCoords = [
    {lat: 50.10404193250331, lng: 14.223407326392827},
    {lat: 50.09963761657638, lng: 14.248126564674077},
    {lat: 50.069677528585274, lng: 14.294818459205327},
    {lat: 50.058217251671074, lng: 14.248126564674077},
    {lat: 50.022937686245406, lng: 14.315417824439702},
    {lat: 50.00970116474511, lng: 14.308551369361577},
    {lat: 49.99646099670848, lng: 14.298938332252202},
    {lat: 49.98851514542532, lng: 14.320910988502202},
    {lat: 49.98851514542532, lng: 14.338763771705327},
    {lat: 49.973502732996025, lng: 14.336017189674077},
    {lat: 49.94964986055542, lng: 14.330524025611577},
    {lat: 49.94611509652358, lng: 14.392322121314702},
    {lat: 49.970852997443096, lng: 14.399188576392827},
    {lat: 49.966436447306414, lng: 14.432147560767827},
    {lat: 49.971736258837986, lng: 14.456866799049077},
    {lat: 49.98851514542532, lng: 14.484332619361577},
    {lat: 49.99557818917742, lng: 14.511798439674077},
    {lat: 50.01234876075855, lng: 14.528277931861577},
    {lat: 50.007936019702136, lng: 14.565356789283452},
    {lat: 50.01234876075855, lng: 14.584582863502202},
    {lat: 49.99204679697011, lng: 14.646380959205327},
    {lat: 50.01146624496074, lng: 14.668353615455327},
    {lat: 50.04058070970464, lng: 14.654620705299077},
    {lat: 50.05998054941295, lng: 14.639514504127202},
    {lat: 50.0740845983518, lng: 14.699939308814702},
    {lat: 50.09347089397028, lng: 14.702685890845952},
    {lat: 50.10844584349747, lng: 14.654620705299077},
    {lat: 50.12429657040645, lng: 14.653247414283452},
    {lat: 50.130459324869406, lng: 14.614795265845952},
    {lat: 50.146302764060245, lng: 14.583209572486577},
    {lat: 50.155982282972396, lng: 14.591449318580327},
    {lat: 50.16302070249173, lng: 14.546130715064702},
    {lat: 50.1779739033828, lng: 14.525531349830327},
    {lat: 50.16565984265299, lng: 14.460986672095952},
    {lat: 50.15862181172962, lng: 14.430774269752202},
    {lat: 50.14014205005624, lng: 14.386828957252202},
    {lat: 50.14542271063937, lng: 14.356616554908452},
    {lat: 50.11373000219497, lng: 14.356616554908452},
    {lat: 50.115491258855926, lng: 14.318164406470952},
    {lat: 50.13133965358494, lng: 14.305804787330327},
    {lat: 50.114610638623574, lng: 14.282458840064702}
	];

	// Construct the polygon.
	var jihomoravskyKraj = new google.maps.Polygon({
	    paths: [jihomoravskyKrajCoords, prazskyKrajCoords],
	    strokeColor: '#FA4514',
	    strokeOpacity: 0.8,
	    strokeWeight: 2,
	    fillColor: '#FA4514',
	    fillOpacity: 0.3
	});


	// Draw the polygon on the desired map instance
	jihomoravskyKraj.setMap(map);
	*/

	// Add markers
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
			//infowindow.open(map, marker);
		});
	}

	/*var cityCircle = new google.maps.Circle({
    strokeColor: "#002858",
    strokeOpacity: 1,
    strokeWeight: 2,
    fillOpacity: 0.2,
    fillColor: "#ffffff",
    map,
    center: latlng,
    radius: 5000,
  });*/

	//infowindow.open(map, marker);
}

function center_map(map) {
	var bounds = new google.maps.LatLngBounds();
	var offsetY = 0;
	var zoom = 8;

	// Pokud je marker mimo osu
	if (jQuery(window).width() < 767) {
		//offsetY = -0.0025;
		offsetY = 0;
		zoom = 6;
	} else {
		//offsetY = -0.0025;
		offsetY = 0;
		zoom = 8;
	}

	jQuery.each(map.markers, function(i, marker) {
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

	//map.setCenter({lat: 49.1176133, lng: 16.6984062});
	//map.setCenter({lat: 49.7014603, lng: 15.5016035});
	//map.setZoom(zoom);
}

// funkci vola parametr ?callback=initMap ve <script> volani knihovny google mapy
// <script type="text/javascript" src="https://maps.google.com/maps/api/js?key=API_KEY&callback=initMap" async defer></script>
function initMap() {
  jQuery('.gmap').each(function() {
		map = new_map(jQuery(this));
		center_map(map);
		//mapArray.push(map);
	});
}