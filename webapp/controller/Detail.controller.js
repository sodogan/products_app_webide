sap.ui.define([
	"./BaseController",
	"sap/ui/core/UIComponent",
	"sap/ui/core/routing/History"
], function (BaseController, UIComponent, History) {
	"use strict";

	return BaseController.extend("com.sodogan.Products.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.sodogan.Products.view.Detail
		 */
		onInit: function () {
			var oRouter = this.getRouter();

			// listen to router events, when navigate to route 'detail' ocurred, call function '_onObjectMatched'
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			debugger;

			var _productId = oEvent.getParameter("arguments").productId;
			var productID = decodeURIComponent(_productId);

			// element binding on the entire view
			this.getView().bindElement({
				path: productID
			});
		},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.sodogan.Products.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.sodogan.Products.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.sodogan.Products.view.Detail
		 */
		//	onExit: function() {
		//
		//	}

		onNavBack: function () {
			// very simple version for navigate back
			// var oRouter = UIComponent.getRouterFor(this);
			// oRouter.navTo("list");

			// comprehensive version for navigate back, also check browser hash in case user use the navigation buttons on browser toolbar  
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				// if history hash is valid, use the standard JavaScript window.history.go() method
				window.history.go(-1);
			} else {
				// use UI5 routing method to navigate to route 'list'
				var oRouter = this.getRouter();
				oRouter.navTo("list", {}, true);
			}
		}

	});

});