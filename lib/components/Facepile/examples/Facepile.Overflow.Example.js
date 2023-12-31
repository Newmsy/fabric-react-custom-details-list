import * as React from 'react';
import { Facepile, OverflowButtonType } from 'office-ui-fabric-react/lib/Facepile';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { facepilePersonas } from '@uifabric/example-data';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
var styles = mergeStyleSets({
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
    { key: OverflowButtonType.none, text: OverflowButtonType[OverflowButtonType.none] },
    { key: OverflowButtonType.descriptive, text: OverflowButtonType[OverflowButtonType.descriptive] },
    { key: OverflowButtonType.downArrow, text: OverflowButtonType[OverflowButtonType.downArrow] },
    { key: OverflowButtonType.more, text: OverflowButtonType[OverflowButtonType.more] },
];
export var FacepileOverflowExample = function () {
    var _a = React.useState(5), displayedPersonas = _a[0], setDisplayedPersonas = _a[1];
    var _b = React.useState(OverflowButtonType.none), overflowButtonType = _b[0], setOverflowButtonType = _b[1];
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
        React.createElement(Facepile, { personas: facepilePersonas, maxDisplayablePersonas: displayedPersonas, overflowButtonType: overflowButtonType, overflowButtonProps: overflowButtonProps, ariaDescription: 'To move through the items use left and right arrow keys.', ariaLabel: 'Example list of Facepile personas' }),
        React.createElement("div", { className: styles.control },
            React.createElement(Slider, { label: "Number of Personas:", className: styles.slider, min: 1, max: 5, step: 1, showValue: true, value: displayedPersonas, onChange: onChangePersonaNumber }),
            React.createElement(Dropdown, { label: "Overflow Button Type:", className: styles.dropdown, selectedKey: overflowButtonType, options: dropdownOptions, onChange: onChangeType }))));
};
//# sourceMappingURL=Facepile.Overflow.Example.js.map