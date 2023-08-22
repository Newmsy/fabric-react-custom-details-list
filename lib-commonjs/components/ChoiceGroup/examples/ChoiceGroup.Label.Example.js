"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ChoiceGroup_1 = require("office-ui-fabric-react/lib-commonjs/ChoiceGroup");
var Label_1 = require("office-ui-fabric-react/lib-commonjs/Label");
var Icon_1 = require("office-ui-fabric-react/lib-commonjs/Icon");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var react_hooks_1 = require("@uifabric/react-hooks");
var options = [
    { key: 'A', text: 'Option A' },
    { key: 'B', text: 'Option B' },
    { key: 'C', text: 'Option C', disabled: true },
    { key: 'D', text: 'Option D' },
];
exports.ChoiceGroupLabelExample = function () {
    // Use the useId() hook to ensure that the label ID is unique on the page. Notes:
    // - It's also okay to use a plain string and manually ensure its uniqueness.
    // - In a function component, we get the ID with the useId() hook so that it will stay the same.
    //   (In a class, you'd create the ID in the constructor with getId and save it in a private member.)
    var labelId = react_hooks_1.useId('labelElement');
    return (React.createElement("div", null,
        React.createElement(Label_1.Label, { id: labelId },
            React.createElement(Stack_1.Stack, { horizontal: true, verticalAlign: "center" },
                React.createElement("span", null, "Custom label\u00A0\u00A0"),
                React.createElement(Icon_1.Icon, { iconName: "Filter" }))),
        React.createElement(ChoiceGroup_1.ChoiceGroup
        // This is usually what you should do
        // label="Normal label"
        , { 
            // This is usually what you should do
            // label="Normal label"
            defaultSelectedKey: "B", options: options, onChange: _onChange, ariaLabelledBy: labelId })));
};
function _onChange(ev, option) {
    console.dir(option);
}
//# sourceMappingURL=ChoiceGroup.Label.Example.js.map