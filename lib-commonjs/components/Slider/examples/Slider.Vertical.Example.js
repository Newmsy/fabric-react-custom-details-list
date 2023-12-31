"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Slider_1 = require("office-ui-fabric-react/lib-commonjs/Slider");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var stackStyles = { root: { height: 200 } };
var stackTokens = { childrenGap: 20 };
// tslint:disable:jsx-no-lambda
exports.SliderVerticalExample = function () {
    return (React.createElement(Stack_1.Stack, { horizontal: true, tokens: stackTokens, styles: stackStyles },
        React.createElement(Slider_1.Slider // prettier-ignore
        , { label: "Basic", min: 1, max: 5, step: 1, defaultValue: 2, showValue: true, vertical: true }),
        React.createElement(Slider_1.Slider // prettier-ignore
        , { label: "Disabled", min: 50, max: 500, step: 50, defaultValue: 300, showValue: true, vertical: true, disabled: true }),
        React.createElement(Slider_1.Slider // prettier-ignore
        , { label: "Controlled", max: 10, vertical: true, showValue: true }),
        React.createElement(Slider_1.Slider // prettier-ignore
        , { label: "Formatted value", max: 100, valueFormat: function (value) { return value + "%"; }, showValue: true, vertical: true }),
        React.createElement(Slider_1.Slider // prettier-ignore
        , { label: "Origin from zero", min: -5, max: 15, step: 1, defaultValue: 5, showValue: true, vertical: true, originFromZero: true })));
};
//# sourceMappingURL=Slider.Vertical.Example.js.map