"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var maskFormat = {
    '*': /[a-zA-Z0-9_]/,
};
var stackTokens = { maxWidth: 300 };
exports.TextFieldMaskedExample = function () {
    return (React.createElement(office_ui_fabric_react_1.Stack, { tokens: stackTokens },
        React.createElement("p", null, "The mask has been modified here to allow \"_\""),
        React.createElement(office_ui_fabric_react_1.MaskedTextField, { label: "With input mask", mask: "m\\ask: ****", maskFormat: maskFormat, maskChar: "?" })));
};
//# sourceMappingURL=TextField.Masked.Example.js.map