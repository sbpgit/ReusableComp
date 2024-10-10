sap.ui.define([
    "sap/ui/core/mvc/Controller"
   
],
function (Controller) {
    "use strict";

    return Controller.extend("reuse.reusablecomp.controller.View1", {
        onInit: function () {
          
          
            this.getView().bindElement(this.getOwnerComponent().getBindingPath(),{model:"northwind"});
            this.getOwnerComponent().setView(this.getView());
        },
    });
});
