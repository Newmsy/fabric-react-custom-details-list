"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Slider_Basic_Example_1 = require("./examples/Slider.Basic.Example");
var Slider_Vertical_Example_1 = require("./examples/Slider.Vertical.Example");
var SliderBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Slider/examples/Slider.Basic.Example.tsx');
var SliderVerticalExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Slider/examples/Slider.Vertical.Example.tsx');
exports.SliderPageProps = {
    title: 'Slider',
    componentName: 'Slider',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/undefined',
    examples: [
        {
            title: 'Horizontal sliders',
            code: SliderBasicExampleCode,
            view: React.createElement(Slider_Basic_Example_1.SliderBasicExample, null),
        },
        {
            title: 'Vertical sliders',
            code: SliderVerticalExampleCode,
            view: React.createElement(Slider_Vertical_Example_1.SliderVerticalExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/Slider/docs/SliderOverview.md'),
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/Slider/docs/SliderDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/Slider/docs/SliderDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=Slider.doc.js.map