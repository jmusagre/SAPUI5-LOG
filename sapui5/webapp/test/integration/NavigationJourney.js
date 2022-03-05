sap.ui.define([
    'logaligroup/sapui5/localService/mockserver',
    'sap/ui/test/opaQunit',
    './pages/HelloPanel'
], 
/**
 * 
 * @param {typeof sap.ui.test.opaQunit} opaQunit
 */
function(mockserver, opaQunit) {
    'use strict';
    
    QUnit.module("Navigation");
    opaQunit("Should to open Hello Dialog", function(Given, When, Then ) {
        mockserver.init();
        Given.iStartMyUIComponent({
            componentConfig: {
                name: "logaligroup.sapui5"
            }
        });
        When.onTheAppPage.iSayHelloDialogButton();
        Then.onTheAppPage.iSeeTheHelloDialog();
        Then.iTeardownMyApp();
    });
});