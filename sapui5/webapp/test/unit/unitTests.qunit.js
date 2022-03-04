QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";
    sap.ui.require([
        "logaligroup/sapui5/test/unit/allTests"
    ], function () {
        QUnit.start();
    })
});