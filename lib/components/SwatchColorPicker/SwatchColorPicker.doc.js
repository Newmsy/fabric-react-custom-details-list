import * as React from 'react';
import { SwatchColorPickerBasicExample } from './examples/SwatchColorPicker.Basic.Example';
var SwatchColorPickerBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/SwatchColorPicker/examples/SwatchColorPicker.Basic.Example.tsx');
export var SwatchColorPickerPageProps = {
    title: 'SwatchColorPicker',
    componentName: 'SwatchColorPicker',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/SwatchColorPicker',
    examples: [
        {
            title: 'SwatchColorPicker',
            code: SwatchColorPickerBasicExampleCode,
            view: React.createElement(SwatchColorPickerBasicExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/SwatchColorPicker/docs/SwatchColorPickerOverview.md'),
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/SwatchColorPicker/docs/SwatchColorPickerDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/SwatchColorPicker/docs/SwatchColorPickerDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=SwatchColorPicker.doc.js.map