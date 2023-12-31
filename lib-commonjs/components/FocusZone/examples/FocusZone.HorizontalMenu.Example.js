"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Utilities_1 = require("office-ui-fabric-react/lib-commonjs/Utilities");
var FocusZone_1 = require("office-ui-fabric-react/lib-commonjs/FocusZone");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var ITEMS = Utilities_1.createArray(5, function (index) { return ({
    key: index.toString(),
    name: 'Item-' + index,
}); });
exports.FocusZoneHorizontalMenuExample = function () {
    return (React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.domOrder, role: "menubar" }, ITEMS.map(function (item) { return (React.createElement(Button_1.DefaultButton, { key: item.name, role: "menuitem" }, item.name)); })));
};
//# sourceMappingURL=FocusZone.HorizontalMenu.Example.js.map