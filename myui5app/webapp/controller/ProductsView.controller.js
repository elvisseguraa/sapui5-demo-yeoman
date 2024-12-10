sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("myui5app.controller.ProductsView", {
            onInit: function () {

            },

            handleListItemPress: function(oEvent) {
				const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				const selectedProductId = oEvent.getSource().getBindingContext().getProperty("ProductID");
				oRouter.navTo("RouteProductDetail", {
					productId: selectedProductId
				});
			},

            onBeforeRendering: function() {
                console.log("Antes de renderizar");
            },

            onAfterRendering: function() {
                console.log("Despues de renderizar");
                // debugger;
            }
        });
    });
