sap.ui.define([],
	function () {
		"use strict";

		var _helper = {};
		_helper.readBundle = function (bundleFileName) {
			var sLocale = this.getLanguage();
			var _urlPath = this.urlPath(bundleFileName).url;
			var oBundle =  jQuery.sap.resources({
				url: _urlPath,
				locale: sLocale
			}); 
			return oBundle;
		};
		_helper.urlPath = function (fileName){
			var _path = {};
			if(fileName){
			 _path.url = "i18n/" + fileName; 
			}else{
			_path.url = "i18n/i18n.properties" ; 	
			}
			return _path;
		};
		
		_helper.getLanguage = function () {
			return sap.ui.getCore().getConfiguration().getLanguage();
		};

		return _helper;
	}, true
);