"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SearchBox_1 = require("office-ui-fabric-react/lib-commonjs/SearchBox");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var stackTokens = { childrenGap: 20 };
// tslint:disable:jsx-no-lambda
exports.SearchBoxFullSizeExample = function () {
    return (React.createElement(Stack_1.Stack, { tokens: stackTokens },
        React.createElement(SearchBox_1.SearchBox, { placeholder: "Search", onSearch: function (newValue) { return console.log('value is ' + newValue); } }),
        React.createElement(SearchBox_1.SearchBox, { placeholder: "Search with no animation", onSearch: function (newValue) { return console.log('value is ' + newValue); }, disableAnimation: true })));
};
//# sourceMappingURL=SearchBox.FullSize.Example.js.map