import * as React from 'react';
import { SliderBasicExample } from './examples/Slider.Basic.Example';
import { SliderVerticalExample } from './examples/Slider.Vertical.Example';
var SliderBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Slider/examples/Slider.Basic.Example.tsx');
var SliderVerticalExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Slider/examples/Slider.Vertical.Example.tsx');
export var SliderPageProps = {
    title: 'Slider',
    componentName: 'Slider',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/undefined',
    examples: [
        {
            title: 'Horizontal sliders',
            code: SliderBasicExampleCode,
            view: React.createElement(SliderBasicExample, null),
        },
        {
            title: 'Vertical sliders',
            code: SliderVerticalExampleCode,
            view: React.createElement(SliderVerticalExample, null),
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