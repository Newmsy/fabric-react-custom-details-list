"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Facepile_1 = require("office-ui-fabric-react/lib-commonjs/Facepile");
var Dropdown_1 = require("office-ui-fabric-react/lib-commonjs/Dropdown");
var Slider_1 = require("office-ui-fabric-react/lib-commonjs/Slider");
var example_data_1 = require("@uifabric/example-data");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var styles = Styling_1.mergeStyleSets({
    container: {
        maxWidth: 300,
    },
    control: {
        paddingTop: 20,
    },
    slider: {
        margin: '10px 0',
    },
    dropdown: {
        paddingTop: 0,
        margin: '10px 0',
    },
});
var dropdownOptions = [
    { key: Facepile_1.OverflowButtonType.none, text: Facepile_1.OverflowButtonType[Facepile_1.OverflowButtonType.none] },
    { key: Facepile_1.OverflowButtonType.descriptive, text: Facepile_1.OverflowButtonType[Facepile_1.OverflowButtonType.descriptive] },
    { key: Facepile_1.OverflowButtonType.downArrow, text: Facepile_1.OverflowButtonType[Facepile_1.OverflowButtonType.downArrow] },
    { key: Facepile_1.OverflowButtonType.more, text: Facepile_1.OverflowButtonType[Facepile_1.OverflowButtonType.more] },
];
exports.FacepileOverflowExample = function () {
    var _a = React.useState(5), displayedPersonas = _a[0], setDisplayedPersonas = _a[1];
    var _b = React.useState(Facepile_1.OverflowButtonType.none), overflowButtonType = _b[0], setOverflowButtonType = _b[1];
    var overflowButtonProps = {
        ariaLabel: 'More users',
        onClick: function (ev) { return alert('overflow icon clicked'); },
    };
    var onChangeType = function (event, value) {
        setOverflowButtonType(value.key);
    };
    var onChangePersonaNumber = function (value) {
        setDisplayedPersonas(value);
    };
    return (React.createElement("div", { className: styles.container },
        React.createElement(Facepile_1.Facepile, { personas: example_data_1.facepilePersonas, maxDisplayablePersonas: displayedPersonas, overflowButtonType: overflowButtonType, overflowButtonProps: overflowButtonProps, ariaDescription: 'To move through the items use left and right arrow keys.', ariaLabel: 'Example list of Facepile personas' }),
        React.createElement("div", { className: styles.control },
            React.createElement(Slider_1.Slider, { label: "Number of Personas:", className: styles.slider, min: 1, max: 5, step: 1, showValue: true, value: displayedPersonas, onChange: onChangePersonaNumber }),
            React.createElement(Dropdown_1.Dropdown, { label: "Overflow Button Type:", className: styles.dropdown, selectedKey: overflowButtonType, options: dropdownOptions, onChange: onChangeType }))));
};
//# sourceMappingURL=Facepile.Overflow.Example.js.map