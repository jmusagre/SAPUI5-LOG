sap.ui.define([
    'sap/ui/core/UIComponent',
    "logaligroup/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * 
     * @param {typeof sap.ui.core.UIComponent} UIComponent 
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent, Models, ResourceModel) {

        return UIComponent.extend("logaligroup.sapui5.Component", {

            metadata: {
                manifest : "json"
            },

            init: function () {

                UIComponent.prototype.init.apply(this, arguments);

                this.getRouter().initialize();

                this.setModel(Models.createRecipient());

                var i18nModel = new ResourceModel({ bundleName: "logaligroup.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }
        });

    });