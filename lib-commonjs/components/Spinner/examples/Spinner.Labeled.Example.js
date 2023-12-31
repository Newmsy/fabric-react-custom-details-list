"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Spinner_1 = require("office-ui-fabric-react/lib-commonjs/Spinner");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var Label_1 = require("office-ui-fabric-react/lib-commonjs/Label");
exports.SpinnerLabeledExample = function () {
    var stackTokens = {
        childrenGap: 20,
        maxWidth: 250,
    };
    return (React.createElement(Stack_1.Stack, { tokens: stackTokens },
        React.createElement("div", null,
            React.createElement(Label_1.Label, null, "Spinner with label positioned below"),
            React.createElement(Spinner_1.Spinner, { label: "I am definitely loading..." })),
        React.createElement("div", null,
            React.createElement(Label_1.Label, null, "Spinner with label positioned above"),
            React.createElement(Spinner_1.Spinner, { label: "Seriously, still loading...", ariaLive: "assertive", labelPosition: "top" })),
        React.createElement("div", null,
            React.createElement(Label_1.Label, null, "Spinner with label positioned to right"),
            React.createElement(Spinner_1.Spinner, { label: "Wait, wait...", ariaLive: "assertive", labelPosition: "right" })),
        React.createElement("div", null,
            React.createElement(Label_1.Label, null, "Spinner with label positioned to left"),
            React.createElement(Spinner_1.Spinner, { label: "Nope, still loading...", ariaLive: "assertive", labelPosition: "left" }))));
};
//# sourceMappingURL=Spinner.Labeled.Example.js.map