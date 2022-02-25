sap.ui.define([], function () {
    'use strict';
    return {
        invoicesStatus: function (sStatus) {

            const resourcecBoundle = this.getView().getModel("i18n").getResourceBundle();
            switch (sStatus) {
                case 'A': return resourcecBoundle.getText("invoiceStatusA");
                case 'B': return resourcecBoundle.getText("invoiceStatusB");
                default: return sStatus;
            }
        }
    }
});