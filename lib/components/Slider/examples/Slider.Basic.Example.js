import * as React from 'react';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
var stackStyles = { root: { maxWidth: 300 } };
var stackTokens = { childrenGap: 20 };
var sliderAriaValueText = function (value) { return value + " percent"; };
var sliderValueFormat = function (value) { return value + "%"; };
export var SliderBasicExample = function () {
    var _a = React.useState(0), sliderValue = _a[0], setSliderValue = _a[1];
    var sliderOnChange = function (value) { return setSliderValue(value); };
    return (React.createElement(Stack, { tokens: stackTokens, styles: stackStyles },
        React.createElement(Slider, null),
        React.createElement(Slider, { label: "Snapping slider example", min: 0, max: 50, step: 10, defaultValue: 20, showValue: true, snapToStep: true }),
        React.createElement(Slider, { label: "Disabled example", min: 50, max: 500, step: 50, defaultValue: 300, showValue: true, disabled: true }),
        React.createElement(Slider, { label: "Controlled example", max: 10, value: sliderValue, showValue: true, onChange: sliderOnChange }),
        React.createElement(Slider, { label: "Example with formatted value", max: 100, ariaValueText: sliderAriaValueText, valueFormat: sliderValueFormat, showValue: true }),
        React.createElement(Slider, { label: "Origin from zero", min: -5, max: 5, step: 1, defaultValue: 2, showValue: true, originFromZero: true })));
};
//# sourceMappingURL=Slider.Basic.Example.js.map