define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/TextField", "office-ui-fabric-react/lib/Stack"], function (require, exports, tslib_1, React, TextField_1, Stack_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stackTokens = { childrenGap: 50 };
    var stackStyles = { root: { width: 650 } };
    var columnProps = {
        tokens: { childrenGap: 15 },
        styles: { root: { width: 300 } },
    };
    exports.TextFieldBorderlessExample = function () {
        return (React.createElement(Stack_1.Stack, { horizontal: true, tokens: stackTokens, styles: stackStyles },
            React.createElement(Stack_1.Stack, tslib_1.__assign({}, columnProps),
                React.createElement(TextField_1.TextField, { label: "Standard:", underlined: true }),
                React.createElement(TextField_1.TextField, { label: "Disabled:", underlined: true, disabled: true, defaultValue: "I am disabled" }),
                React.createElement(TextField_1.TextField, { label: "Required:", underlined: true, required: true, placeholder: "Enter text here" })),
            React.createElement(Stack_1.Stack, tslib_1.__assign({}, columnProps),
                React.createElement(TextField_1.TextField, { label: "Borderless single-line TextField", borderless: true, placeholder: "No borders here, folks." }),
                React.createElement(TextField_1.TextField, { label: "Borderless multi-line TextField", borderless: true, multiline: true, placeholder: "No borders here, folks." }))));
    };
});
//# sourceMappingURL=TextField.Borderless.Example.js.map