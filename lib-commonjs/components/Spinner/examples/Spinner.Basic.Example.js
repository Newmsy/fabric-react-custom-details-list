"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Spinner_1 = require("office-ui-fabric-react/lib-commonjs/Spinner");
var Label_1 = require("office-ui-fabric-react/lib-commonjs/Label");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
exports.SpinnerBasicExample = function () {
    // This is just for laying out the label and spinner (spinners don't have to be inside a Stack)
    var rowProps = { horizontal: true, verticalAlign: 'center' };
    var tokens = {
        sectionStack: {
            childrenGap: 10,
        },
        spinnerStack: {
            childrenGap: 20,
        },
    };
    return (React.createElement(Stack_1.Stack, { tokens: tokens.sectionStack },
        React.createElement(Stack_1.Stack, tslib_1.__assign({}, rowProps, { tokens: tokens.spinnerStack }),
            React.createElement(Label_1.Label, null, "Extra small spinner"),
            React.createElement(Spinner_1.Spinner, { size: Spinner_1.SpinnerSize.xSmall })),
        React.createElement(Stack_1.Stack, tslib_1.__assign({}, rowProps, { tokens: tokens.spinnerStack }),
            React.createElement(Label_1.Label, null, "Small spinner"),
            React.createElement(Spinner_1.Spinner, { size: Spinner_1.SpinnerSize.small })),
        React.createElement(Stack_1.Stack, tslib_1.__assign({}, rowProps, { tokens: tokens.spinnerStack }),
            React.createElement(Label_1.Label, null, "Medium spinner"),
            React.createElement(Spinner_1.Spinner, { size: Spinner_1.SpinnerSize.medium })),
        React.createElement(Stack_1.Stack, tslib_1.__assign({}, rowProps, { tokens: tokens.spinnerStack }),
            React.createElement(Label_1.Label, null, "Large spinner"),
            React.createElement(Spinner_1.Spinner, { size: Spinner_1.SpinnerSize.large }))));
};
//# sourceMappingURL=Spinner.Basic.Example.js.map