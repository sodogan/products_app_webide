sap.ui.define([
	"./BaseController",
	"sap/ui/core/UIComponent",
	"sap/ui/core/Fragment"
], function (BaseController, UIComponent, Fragment) {
	"use strict";

	return BaseController.extend("com.sodogan.Products.controller.List", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.sodogan.Products.view.List
		 */
		onInit: function () {

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.sodogan.Products.view.List
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.sodogan.Products.view.List
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.sodogan.Products.view.List
		 */
		//	onExit: function() {
		//
		//	}
		onProductCardPressed: function (oEvent) {
			var oView = this.getView();
			var that = this;
			var sPath = oEvent.getSource().getBindingContext().getPath();
			if (!this._oDialog) {
				Fragment.load({
					id: oView.getId(),
					name: "com.sodogan.Products.view.fragments.ProductDialog",
					controller: this
				}).then(function (oDialog) {
					// connect dialog to the root view 
					//of this component (models, lifecycle)
					that._oDialog = oDialog;

					//set the binding path
					// get item binding context like: /Products/1
					// use element binding to bind data to the dialog
					that._oDialog.bindElement({
						path: sPath
					});
					oView.addDependent(that._oDialog);

					that._oDialog.open();
				});
			} else {
				this._oDialog.open();
			}

		},
		onProductCardPressedAsync: async function (oEvent) {
			var oView = this.getView();
			var that = this;
			var sPath = oEvent.getSource().getBindingContext().getPath();

			if (!this._oDialog) {
				this._oDialog = await Fragment.load({
					id: oView.getId(),
					name: "com.sodogan.Products.view.fragments.ProductDialog",
					controller: this
				});

				this._oDialog.bindElement({
					path: sPath
				});
				oView.addDependent(this._oDialog);
			}
			this._oDialog.open();

		},
		// function to handle close button press event (in product dialog)
		onCloseProductDialog: function () {
			this._oDialog.close();
		},
		onGoToDetail: function (oEvent) {
			//Need to go to the detail page
			debugger;
			var oItem = oEvent.getSource().getParent().getParent(),
				sPath = oItem.getBindingContext().getPath(); // binding path like /Products/1

			var oRouter = this.getRouter();

			var encodedUri = encodeURIComponent(sPath);

			oRouter.navTo("detail", {
				// only parameters defined in "pattern" in manifest.json will be passed to target
				productId: encodedUri
			}, true);

		}

	});

});