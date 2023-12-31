import * as React from 'react';
import { ColorPickerBasicExample } from './examples/ColorPicker.Basic.Example';
var ColorPickerBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ColorPicker/examples/ColorPicker.Basic.Example.tsx');
export var ColorPickerPageProps = {
    title: 'ColorPicker',
    componentName: 'ColorPicker',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/ColorPicker',
    examples: [
        {
            title: 'Default ColorPicker',
            code: ColorPickerBasicExampleCode,
            view: React.createElement(ColorPickerBasicExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/ColorPicker/docs/ColorPickerOverview.md'),
    bestPractices: '',
    dos: '',
    donts: '',
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=ColorPicker.doc.js.map