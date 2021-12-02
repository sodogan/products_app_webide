sap.ui.define([
    "sap/ui/base/Object"
], function (BaseObject) {
    "use strict";

    return BaseObject.extend("com.sodogan.Products.model.formatter.obj", {

        /**
         * @param {sap.ui.core.UIComponent} oComponent reference to the app's component
         */
        constructor: function (oComponent) {
            this._oComponent = oComponent;
            this._oResourceBundle = oComponent.getModel("i18n").getResourceBundle();

            this._oModel = oComponent.getModel("odataDetails");
        },

      generateBackendData: function () {
            // you can access this._oModel here and do stuff
            return {
            	name: 'solen',
            	age: 39
            };
        }
    });
});