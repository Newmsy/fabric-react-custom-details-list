"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SearchBox_1 = require("office-ui-fabric-react/lib-commonjs/SearchBox");
var searchBoxStyles = { root: { width: 200 } };
// tslint:disable:jsx-no-lambda
exports.SearchBoxSmallExample = function () { return (React.createElement(SearchBox_1.SearchBox, { styles: searchBoxStyles, placeholder: "Search", onEscape: function (ev) {
        console.log('Custom onEscape Called');
    }, onClear: function (ev) {
        console.log('Custom onClear Called');
    }, onChange: function (_, newValue) { return console.log('SearchBox onChange fired: ' + newValue); }, onSearch: function (newValue) { return console.log('SearchBox onSearch fired: ' + newValue); } })); };
//# sourceMappingURL=SearchBox.Small.Example.js.map