define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/TextField", "office-ui-fabric-react/lib/Stack"], function (require, exports, tslib_1, React, TextField_1, Stack_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stackStyles = { root: { width: 650 } };
    var stackTokens = { childrenGap: 50 };
    exports.TextFieldPrefixAndSuffixExample = function () {
        var columnProps = {
            tokens: { childrenGap: 15 },
            styles: { root: { width: 300 } },
        };
        return (React.createElement(Stack_1.Stack, { horizontal: true, tokens: stackTokens, styles: stackStyles },
            React.createElement(Stack_1.Stack, tslib_1.__assign({}, columnProps),
                React.createElement(TextField_1.TextField // prettier-ignore
                , { label: "With prefix", prefix: "https://", ariaLabel: "Example text field with https:// prefix" }),
                React.createElement(TextField_1.TextField // prettier-ignore
                , { label: "Disabled with prefix", prefix: "https://", disabled: true, ariaLabel: "Example text field with https:// prefix" })),
            React.createElement(Stack_1.Stack, tslib_1.__assign({}, columnProps),
                React.createElement(TextField_1.TextField // prettier-ignore
                , { label: "With suffix", suffix: ".com", ariaLabel: "Example text field with .com suffix" }),
                React.createElement(TextField_1.TextField, { label: "With prefix and suffix", prefix: "https://", suffix: ".com", ariaLabel: "Example text field with https:// prefix and .com suffix" }))));
    };
});
//# sourceMappingURL=TextField.PrefixAndSuffix.Example.js.map