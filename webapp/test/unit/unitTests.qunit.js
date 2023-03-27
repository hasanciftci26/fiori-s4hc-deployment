/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ndbsgfc/gfc-members-ui/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
