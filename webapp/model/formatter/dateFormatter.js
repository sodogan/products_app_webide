sap.ui.define(["com/sodogan/Products/model/formatter/base",
               "sap/ui/core/format/DateFormat"],
	function (Base,DateFormat) {
		"use strict";

		var _dateFormatter = Object.create(Base);

		_dateFormatter.format = function (fValue) {
			var _fValue = new Date(fValue);
            var oBundle = this.readBundle("i18n.properties");
            var _formatText = oBundle.getText("DateTimeFormat");
            var _dateFormatObj = DateFormat.getDateTimeInstance({pattern : _formatText  });
            return  _dateFormatObj.format(_fValue);
      		
		};
		
		return _dateFormatter;
	},true
);