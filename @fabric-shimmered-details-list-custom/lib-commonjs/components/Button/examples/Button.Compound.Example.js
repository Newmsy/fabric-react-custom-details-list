"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
// Example formatting
var stackTokens = { childrenGap: 40 };
exports.ButtonCompoundExample = function (props) {
    var disabled = props.disabled, checked = props.checked;
    return (React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, tokens: stackTokens },
        React.createElement(office_ui_fabric_react_1.CompoundButton, { secondaryText: "This is the secondary text.", disabled: disabled, checked: checked }, "Standard"),
        React.createElement(office_ui_fabric_react_1.CompoundButton, { primary: true, secondaryText: "This is the secondary text.", disabled: disabled, checked: checked }, "Primary")));
};
//# sourceMappingURL=Button.Compound.Example.js.map