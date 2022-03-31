sap.ui.define([
    'sap/ui/core/UIComponent',
    "logaligroup/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
],
    /**
     * 
     * @param {typeof sap.ui.core.UIComponent} UIComponent 
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent, Models, ResourceModel, HelloDialog) {

        return UIComponent.extend("logaligroup.sapui5.Component", {

            metadata: {
                manifest : "json"
            },

            init: function () {

                UIComponent.prototype.init.apply(this, arguments);

                this.getRouter().initialize();

                this.setModel(Models.createRecipient());

                //var i18nModel = new ResourceModel({ bundleName: "logaligroup.sapui5.i18n.i18n" });
                //this.setModel(i18nModel, "i18n");

                this._helloDialog = new HelloDialog(this.getRootControl());

                this.getRouter().initialize();
            },

            exit: function () {
                this._helloDialog.destroy();
                delete this._helloDialog;
            },

            openHelloDialog: function () {
                this._helloDialog.open();
            }
        });

    });