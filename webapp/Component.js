/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "reuse/reusablecomp/model/models",
        "sap/suite/ui/generic/template/extensionAPI/ReuseComponentSupport"
    ],
    function (UIComponent, Device, models,ReuseComponentSupport) {
        "use strict";

        return UIComponent.extend("reuse.reusablecomp.Component", {
            metadata: {
                manifest: "json",
                library: "demoLibrary",
                properties: {
                    /* Standard properties for reuse components */
                    uiMode: {
                        type: "string",
                        group: "standard"
                    },
                    semanticObject: {
                        type: "string",
                        group: "standard"
                    },
                    stIsAreaVisible: {
                        type: "boolean",
                        group: "standard"
                    },
                    /* Component specific properties */
                    locationId: {
                        type: "string",
                        group: "specific",
                        defaultValue: ""
                    }

                }
            },


            setStIsAreaVisible: function () {
                
                // if (bIsAreaVisible !== this.getStIsAreaVisible()) {
                  this.setProperty("stIsAreaVisible", true); 
                // }  
               
              },
              
              setLocationId: function (sLocationID) {
                if(sLocationID !== this.getLocationId()){
                  this.setProperty("locationId", sLocationID);
                  this.getStIsAreaVisible () &&
                 this.getModel("northwind").metadataLoaded().then(this._setViewBinding.bind(this,sLocationID));
                }
              },

           

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
          


                ReuseComponentSupport.mixInto(this);
               
        
                ( UIComponent.prototype.init || jQuery.noop ).apply(this, arguments);
               
                this.setStIsAreaVisible()

            },

            setView: function (oView) {
                this._compView = oView;  
            },
            getBindingPath: function () {
                return this._bindingPath;
            },
        _setViewBinding: function (sLocationID) {
                var oModel = this.getModel("northwind");
                this._bindingPath = oModel.createKey("/LOCATION_IBP", {
                    LOCATION_ID: sLocationID
                });
                if (this._compView) {
                  this._compView.bindElement(this._bindingPath,{model:"northwind"});
                }
              },
        });
    }
);