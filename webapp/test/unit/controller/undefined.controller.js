/*global QUnit*/

sap.ui.define([
	"reuse/reusablecomp/controller/.controller"
], function (Controller) {
	"use strict";

	QUnit.module(" Controller");

	QUnit.test("I should test the  controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
