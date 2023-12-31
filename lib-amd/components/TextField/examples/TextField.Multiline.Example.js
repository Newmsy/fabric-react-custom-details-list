define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/TextField", "@uifabric/react-hooks", "@uifabric/example-data", "office-ui-fabric-react/lib/Stack"], function (require, exports, tslib_1, React, TextField_1, react_hooks_1, example_data_1, Stack_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
//# sourceMappingURL=TextField.Multiline.Example.js.map