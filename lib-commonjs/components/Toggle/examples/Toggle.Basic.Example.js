"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Toggle_1 = require("office-ui-fabric-react/lib-commonjs/Toggle");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var stackTokens = { childrenGap: 10 };
exports.ToggleBasicExample = function () {
    return (React.createElement(Stack_1.Stack, { tokens: stackTokens },
        React.createElement(Toggle_1.Toggle, { label: "Enabled and checked", defaultChecked: true, onText: "On", offText: "Off", onChange: _onChange }),
        React.createElement(Toggle_1.Toggle, { label: "Enabled and unchecked", onText: "On", offText: "Off", onChange: _onChange }),
        React.createElement(Toggle_1.Toggle, { label: "Disabled and checked", defaultChecked: true, disabled: true, onText: "On", offText: "Off" }),
        React.createElement(Toggle_1.Toggle, { label: "Disabled and unchecked", disabled: true, onText: "On", offText: "Off" }),
        React.createElement(Toggle_1.Toggle, { label: "With inline label", inlineLabel: true, onText: "On", offText: "Off", onChange: _onChange }),
        React.createElement(Toggle_1.Toggle, { label: "Disabled with inline label", inlineLabel: true, disabled: true, onText: "On", offText: "Off" }),
        React.createElement(Toggle_1.Toggle, { label: "With inline label and without onText and offText", inlineLabel: true, onChange: _onChange }),
        React.createElement(Toggle_1.Toggle, { label: "Disabled with inline label and without onText and offText", inlineLabel: true, disabled: true }),
        React.createElement(Toggle_1.Toggle, { label: "Enabled and checked (ARIA 1.0 compatible)", defaultChecked: true, onText: "On", offText: "Off", onChange: _onChange, role: "checkbox" })));
};
function _onChange(ev, checked) {
    console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
}
//# sourceMappingURL=Toggle.Basic.Example.js.map