"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
// Example formatting
var stackTokens = { childrenGap: 40 };
exports.ButtonDefaultExample = function (props) {
    var disabled = props.disabled, checked = props.checked;
    return (React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, tokens: stackTokens },
        React.createElement(office_ui_fabric_react_1.DefaultButton, { text: "Standard", onClick: _alertClicked, allowDisabledFocus: true, disabled: disabled, checked: checked }),
        React.createElement(office_ui_fabric_react_1.PrimaryButton, { text: "Primary", onClick: _alertClicked, allowDisabledFocus: true, disabled: disabled, checked: checked })));
};
function _alertClicked() {
    alert('Clicked');
}
//# sourceMappingURL=Button.Default.Example.js.map