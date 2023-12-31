"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var TextField_1 = require("office-ui-fabric-react/lib-commonjs/TextField");
var react_hooks_1 = require("@uifabric/react-hooks");
var example_data_1 = require("@uifabric/example-data");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var stackStyles = { root: { width: 650 } };
var stackTokens = { childrenGap: 50 };
var dummyText = example_data_1.lorem(100);
var columnProps = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } },
};
exports.TextFieldMultilineExample = function () {
    var _a = react_hooks_1.useBoolean(false), multiline = _a[0], toggleMultiline = _a[1].toggle;
    var onChange = function (ev, newText) {
        var newMultiline = newText.length > 50;
        if (newMultiline !== multiline) {
            toggleMultiline();
        }
    };
    return (React.createElement(Stack_1.Stack, { horizontal: true, tokens: stackTokens, styles: stackStyles },
        React.createElement(Stack_1.Stack, tslib_1.__assign({}, columnProps),
            React.createElement(TextField_1.TextField, { label: "Standard", multiline: true, rows: 3 }),
            React.createElement(TextField_1.TextField, { label: "Disabled", multiline: true, rows: 3, disabled: true, defaultValue: dummyText }),
            React.createElement(TextField_1.TextField, { label: "Non-resizable", multiline: true, resizable: false })),
        React.createElement(Stack_1.Stack, tslib_1.__assign({}, columnProps),
            React.createElement(TextField_1.TextField, { label: "With auto adjusting height", multiline: true, autoAdjustHeight: true }),
            React.createElement(TextField_1.TextField, { label: "Switches from single to multiline if more than 50 characters are entered", multiline: multiline, onChange: onChange }))));
};
//# sourceMappingURL=TextField.Multiline.Example.js.map